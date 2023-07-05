//? State management
import { useMemo, useState } from "preact/hooks";
//? Components/Islands
import RetirementCalculatorForm from "./RetirementCalculationForm.tsx";
import { RetirementCalculationTable } from "../../components/retirement-calculator/RetirementCalculationTable.tsx";
import { StyledSubHeader } from "../../components/UI/StyledSubHeader.tsx";
//? Data
import { baseRetirementStats } from "../../data/tools/retirement-calculator/baseRetirementStats.ts";

export default function RetirementCalculator() {
  //? Manages current state for form data
  const [formValues, setValues] = useState(baseRetirementStats);
  //? Track values to calculate
  const [finalValuesToCalculate, updateValuesToCalculate] = useState<
    typeof baseRetirementStats | undefined
  >(
    undefined,
  );

  return (
    <>
      {RetirementCalculatorForm({
        formValues,
        setValues,
        updateValuesToCalculate,
      })}
      <div class="flex flex-col items-center">
        <StyledSubHeader title="Results" />
        {useMemo(
          () => RetirementCalculationTable({ values: finalValuesToCalculate }),
          [finalValuesToCalculate],
        )}
      </div>
    </>
  );
}
