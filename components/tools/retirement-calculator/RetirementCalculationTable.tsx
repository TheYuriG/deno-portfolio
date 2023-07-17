//? Import base stats as Type
import type { baseRetirementStats } from "../../../data/tools/retirement-calculator/baseRetirementStats.ts";

//? Creates the table with the yearly distribution of time to retire
export function RetirementCalculationTable(
  { values }: { values: typeof baseRetirementStats | undefined },
) {
  //? If no initial data is passed to this component, render a simple paragraph
  if (typeof values === "undefined") {
    return (
      <>
        <p>
          Update the form with your values and press "Calculate" to display the
          results.
        </p>
      </>
    );
  }

  //? Array with yearly data of current age + total saved + coumpound interest from previous year's savings
  //! Starts with only starting year data
  const retirementCalculation = [{
    age: +values.currentAge,
    totalSaved: +values.starterSavings,
    lastYearCompound: 0,
  }];
  const yearlyInvestment = (+values.yearlySavings * +values.compensation) / 100;

  //? Calculate retirement saving for every year until:
  //* A- the target retirement age OR
  //* B- age when you are able to retire OR
  //* C- 60 years have passed since you started planning to retire
  while (retirementCalculation.length < 60) {
    //? Instantiate the previous year calculated
    const recentEntry = retirementCalculation[retirementCalculation.length - 1];

    //? Calculate how much investment returns last year provided
    const lastYearCoumpound = recentEntry.totalSaved *
      (+values.returns / 100);

    //? Calculate if the person can retire adding lastYearCoumpound+values.additionalIncome
    const cantRetire =
      lastYearCoumpound + +values.additionalIncome < +values.compensation;

    //? Add a new year to the calculation array
    retirementCalculation.push({
      age: recentEntry.age + 1,
      totalSaved: recentEntry.totalSaved + lastYearCoumpound +
        yearlyInvestment,
      lastYearCompound: cantRetire
        ? lastYearCoumpound
        : lastYearCoumpound + +values.additionalIncome,
    });

    //? If last year's returns are above what you make on an average year and
    //? you are past the retiring age, end the calculation
    if (
      lastYearCoumpound > +values.compensation &&
      +values.plannedRetiringAge <= recentEntry.age
    ) {
      break;
    }
  }

  //? Remove the first/current year from the calculation
  retirementCalculation.shift();

  return (
    <>
      {/* Entire table */}
      <table class="text-center custom-bo-ac custom-tr-bo border-collapse">
        {/* Caption */}
        <caption style="padding: 10px; caption-side: bottom;">
          Yearly summary of compound savings
        </caption>
        {/* Table head */}
        <tr>
          <th scope="col" class="py-2 px-4 custom-bo-ac">Age</th>
          <th scope="col" class="py-2 px-4 w-60 custom-bo-ac">Total saved</th>
          <th scope="col" class="py-2 px-4 custom-bo-ac">
            Last compound return
          </th>
        </tr>
        {/* Table body */}
        {retirementCalculation.map((yearCalculation) => (
          <tr
            style={yearCalculation.lastYearCompound > +values.compensation
              ? "background-color: rgba(141, 255, 205, 0.5)" //! Green if eligible to retire
              : yearCalculation.age >= +values.plannedRetiringAge
              ? "background-color: rgba(232, 116, 97, 0.7)" //! Red if past retiring age and not able to retire yet
              : ""}
          >
            {/* Age */}
            <td class="custom-bo-ac">{yearCalculation.age}</td>
            {/* Total saved */}
            <td class="custom-bo-ac break-words max-w-[20vw]">
              ${Math.floor(yearCalculation.totalSaved).toLocaleString()}
            </td>
            {/* Interest returns from last year */}
            <td class="custom-bo-ac break-words max-w-[20vw]">
              ${Math.floor(yearCalculation.lastYearCompound).toLocaleString() +
                (+values.additionalIncome > 0 &&
                    yearCalculation.lastYearCompound >= +values.compensation
                  ? ` (+$${values.additionalIncome.toLocaleString()})`
                  : "")}
            </td>
          </tr>
        ))}
      </table>
      {/* Colors explanation: red = unable to retire / green = enough money to retire */}
      <p class="text-center">
        Red: you are at/past your target retiring age unable to retire
      </p>
      <p class="text-center">
        Green: you make enough from your investments returns to retire
      </p>
    </>
  );
}
