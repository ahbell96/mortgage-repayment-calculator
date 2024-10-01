import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";

interface MortageType {
  interestOnly: boolean;
  repayment: boolean;
}

interface IFormInput {
  mortgageAmount: string;
  mortgageTerm: string;
  interestRate: string;
  interestOnly: string;
  repayment: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
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
            required={true}
            error={errors.repayment}
          />
        </div>
        <div className="border rounded-md border-[#84949A] p-1">
          <Checkbox
            label="Interest Only"
            name="interestOnly"
            register={register}
            required={true}
            error={errors.interestOnly}
          />
        </div>
      </div>
      <Button
        label="Calculate Repayments"
        type="submit"
        backgroundColor="bg-[#D9DB30]"
      />
    </form>
  );
};

export default Form;
