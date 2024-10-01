import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";
import calculatorImg from "../assets/images/icon-calculator.svg";

interface FormInputs {
  mortgageAmount: string;
  mortgageTerm: string;
  interestRate: string;
  interestOnly: boolean;
  repayment: boolean;
}

const Form = () => {
  const {
    register,
    watch,
    handleSubmit,
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

    const monthlyInterestRate = parseInt(interestRate) / 100 / 12;
    const numberOfPayments = parseInt(mortgageTerm) * 12;

    const monthlyRepayment =
      (parseInt(mortgageAmount) * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    console.log("monthlyRepayment.toFixed(2) : ", monthlyRepayment.toFixed(2));

    return monthlyRepayment.toFixed(2);
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("calculateRepayment : ", calculateRepayment(data));
    console.log(data);
  };

  const checkRepayment = watch("repayment", false);
  const checkInterestOnly = watch("interestOnly", false);

  console.log("checkRepayment : ", checkRepayment);
  console.log("checkInterestOnly : ", checkInterestOnly);

  return (
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
      <div className="flex flex-row gap-4 text-left">
        <div>
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
        <div className="border rounded-md border-[#84949A] p-1 my-2">
          <Checkbox
            label="Repayment"
            name="repayment"
            register={register}
            required={!checkInterestOnly}
            error={errors.repayment}
          />
        </div>
        <div className="border rounded-md border-[#84949A] p-1">
          <Checkbox
            label="Interest Only"
            name="interestOnly"
            register={register}
            required={!checkRepayment}
            error={errors.interestOnly}
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
  );
};

export default Form;
