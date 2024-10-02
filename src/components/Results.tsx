import React from "react";
import { Calculations } from "../App";

interface Props {
  illustration: string;
  calculation: Calculations;
}

const Results = ({ illustration, calculation }: Props) => {
  const { calculated, monthlyRepayment, totalRepayment } = calculation;
  return (
    <div
      className="bg-[#133040] text-[#fff] h-full"
      style={{
        borderBottomLeftRadius: "100px",
        borderTopRightRadius: "30px",
        borderBottomRightRadius: "30px",
      }}
    >
      {calculated ? (
        <div
          className="flex flex-col h-full"
          style={{
            borderBottomLeftRadius: "100px",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          <div className="px-10 text-left">
            <h1 className="my-6">Your results</h1>
            <p className="text-[#8EA9B8]">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              "calculate repayments" again.
            </p>
            <div
              className="p-6 bg-[#0E2431] rounded-xl my-6"
              style={{
                borderTop: "5px",
                borderTopColor: "#D9D92B",
                borderStyle: "solid",
              }}
            >
              <div style={{ borderBottom: "1px solid black" }}>
                <p className="text-[#8EA9B8]">Your monthly repayments</p>
                <h1 className="font-bold text-[#D9D92B] my-4 mb-10">
                  £{monthlyRepayment}
                </h1>
              </div>
              <div className="mt-10 mb-5">
                <p className="mb-4 text-[#8EA9B8]">
                  Total you'll repay over the term
                </p>
                <h3 className="font-bold text-3xl">£{totalRepayment}</h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col justify-center items-center content-center h-full"
          style={{
            borderBottomLeftRadius: "100px",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          <img src={illustration} alt="Calculation Equipment" />
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl">Results shown here</h2>
            <p>
              Complete the form and click "calculate repayments" to see what
              your monthly repayments would be.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
