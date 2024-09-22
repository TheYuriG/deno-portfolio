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

    //? Store and reassign current year retirement information
    let currentYearData = {
        age: +values.currentAge,
        totalSaved: +values.starterSavings,
        lastYearCompound: 0,
    }
    //? Array with yearly data of current age + total saved + coumpound interest from previous year's savings
    //! Starts with only starting year data
    const retirementCalculationYears = [currentYearData];
    const yearlyCompensation = +values.compensation;
    const yearlyInvestment = yearlyCompensation * +values.yearlySavings /
        100;


    //? Calculate retirement saving for every year until:
    //* A- the target retirement age OR
    //* B- age when you are able to retire OR
    //* C- 50 years have passed since you started planning to retire
    const MAX_YEARS_WORKING = 50;
    while (retirementCalculationYears.length < MAX_YEARS_WORKING) {
        //? Instantiate the previous year calculated
        const recentEntry = { ...currentYearData };
        //? Calculate how much investment returns last year provided
        const lastYearCoumpoundReturn = Math.floor(recentEntry.totalSaved *
            +values.returns / 100);
        //? Bump a year in the current age calculation
        recentEntry.age++
        recentEntry.totalSaved = recentEntry.totalSaved + lastYearCoumpoundReturn +
            yearlyInvestment
        recentEntry.lastYearCompound = recentEntry.lastYearCompound +
            lastYearCoumpoundReturn + +values.additionalIncome

        //? Add a new year to the calculation array
        retirementCalculationYears.push(recentEntry);

        //? If last year's returns are above what you make on an average year,
        //? end the calculation
        if (recentEntry.lastYearCompound > yearlyCompensation) {
            break;
        }

        currentYearData = recentEntry
    }

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
                    <th scope="col" class="py-2 px-4 w-60 custom-bo-ac">
                        Total saved
                    </th>
                    <th scope="col" class="py-2 px-4 custom-bo-ac">
                        Last compound return
                    </th>
                </tr>
                {/* Table body */}
                {retirementCalculationYears.map((yearCalculation) => (
                    <tr
                        style={yearCalculation.lastYearCompound >
                            yearlyCompensation
                            ? "background-color: rgba(141, 255, 205, 0.5)" //! Green if eligible to retire
                            : yearCalculation.age >= +values.plannedRetiringAge
                                ? "background-color: rgba(232, 116, 97, 0.7)" //! Red if past retiring age and not able to retire yet
                                : ""}
                    >
                        {/* Age */}
                        <td class="custom-bo-ac">{yearCalculation.age}</td>
                        {/* Total saved */}
                        <td class="custom-bo-ac">
                            ${Math.floor(yearCalculation.totalSaved)
                                .toLocaleString()}
                        </td>
                        {/* Interest returns from last year */}
                        <td class="custom-bo-ac">
                            ${Math.floor(yearCalculation.lastYearCompound)
                                .toLocaleString() +
                                (+values.additionalIncome > 0 &&
                                    yearCalculation.lastYearCompound >=
                                    yearlyCompensation
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
