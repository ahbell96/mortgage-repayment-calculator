import React from "react";

const FormHeader = ({ resetAll }: any) => {
  return (
    <div className="flex justify-between gap-12 items-center w-full">
      <h2 className="text-black text-3xl">Mortgage Calculator</h2>
      <button className="text-[#788A8F] btn btn-link" onClick={resetAll}>
        Clear all
      </button>
    </div>
  );
};

export default FormHeader;
