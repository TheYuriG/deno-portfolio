//? State management
import { useState } from "preact/hooks";
//? Components/Islands
import RetirementCalculatorForm from "../islands/RetirementCalculationForm.tsx";
import { baseRetirementStats } from "../types/retirement-calculator/baseRetirementStats.ts";

export default function RetirementCalculator() {
  //? Manages current state for form data
  const [formValues, setValues] = useState(baseRetirementStats);
  //? Tracks if the form was approved and the calculation should be made
  const [displayRetirementCalculation, toggleCalculation] = useState(false);

  return (
    <>
      {RetirementCalculatorForm({ formValues, setValues, toggleCalculation })}
    </>
  );
}
