import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";
import calculatorImg from "../assets/images/icon-calculator.svg";
import { Calculations } from "../App";
import FormHeader from "./FormHeader";

interface FormInputs {
  mortgageAmount: string;
  mortgageTerm: string;
  interestRate: string;
  interestOnly: boolean;
  repayment: boolean;
}

interface Props {
  calculation: Calculations;
  setCalculation: (data: Calculations) => void;
  resetCalculation: () => void;
}

const Form = ({ calculation, setCalculation, resetCalculation }: Props) => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>();

  const calculateRepayment = (data: FormInputs) => {
    const {
      mortgageAmount,
      mortgageTerm,
      interestRate,
      interestOnly,
      repayment,
    } = data;

    const principal = parseInt(mortgageAmount);
    const termInMonths = parseInt(mortgageTerm) * 12;
    const annualInterestRate = parseFloat(interestRate);
    const monthlyInterestRate = annualInterestRate / 100 / 12;

    let monthlyRepayment;

    // Standard loan with interest
    if (repayment) {
      monthlyRepayment =
        (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -termInMonths));
    } else if (interestOnly) {
      monthlyRepayment = 0;
    } else {
      monthlyRepayment = -1;
      console.log("how.");
    }

    // Total repayment over the full term
    const totalRepayment = monthlyRepayment * termInMonths;

    const mortgageCalculations = {
      ...calculation,
      monthlyRepayment: monthlyRepayment.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
      calculated: true,
    };

    setCalculation(mortgageCalculations);

    return monthlyRepayment.toFixed(2);
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) =>
    calculateRepayment(data);

  const checkRepayment = watch("repayment");
  const checkInterestOnly = watch("interestOnly");

  const resetAll = () => {
    resetCalculation();
    reset();

    // show a tooltip etc to show that it is workign fine
  };

  // Handle checkbox toggling
  const handleCheckboxChange = (checkbox: string) => {
    if (checkbox === "repayment") {
      setValue("interestOnly", false);
    } else {
      setValue("repayment", false);
    }
  };

  return (
    <div className="flex flex-col align-center items-center my-6 p-8">
      <FormHeader resetAll={resetAll} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full mt-6"
      >
        <div className="text-left">
          <div className="mb-4">
            <label className="text-[#4D6673] text-lg">Mortgage Amount</label>
          </div>
          <Input
            label="£"
            name="mortgageAmount"
            type="number"
            register={register}
            required={true}
            error={errors.mortgageAmount}
            flexDirection="flex-row"
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-4 text-left">
          <div className="mb-4">
            <div className="mb-4">
              <label className="text-[#4D6673] text-lg">Mortgage Term</label>
            </div>
            <Input
              label="years"
              name="mortgageTerm"
              register={register}
              required={true}
              error={errors.mortgageTerm}
              flexDirection="flex-row-reverse"
            />
          </div>

          <div className="mb-4">
            <div className="mb-4">
              <label className="text-[#4D6673] text-lg">Interest Rate</label>
            </div>
            <Input
              label="%"
              name="interestRate"
              register={register}
              required={true}
              error={errors.interestRate}
              flexDirection="flex-row-reverse"
            />
          </div>
        </div>
        <div className="text-left">
          <div className="mb-4">
            <label className="text-[#4D6673] text-lg">Mortgage Type</label>
          </div>
          <div className="border rounded-md border-[#94A1A9] p-1 my-2">
            <Checkbox
              label="Repayment"
              name="repayment"
              register={register}
              required={!checkInterestOnly}
              error={errors.repayment}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="border rounded-md border-[#94A1A9] p-1">
            <Checkbox
              label="Interest Only"
              name="interestOnly"
              register={register}
              required={!checkRepayment}
              error={errors.interestOnly}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
        <Button
          calculatorImg={calculatorImg}
          label="Calculate Repayments"
          type="submit"
          backgroundColor="bg-[#D9DB30]"
        />
      </form>
    </div>
  );
};

export default Form;
