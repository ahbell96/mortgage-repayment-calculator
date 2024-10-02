import "./App.css";
import Form from "./components/Form";
import Container from "./components/Container";
import illustration from "./assets/images/illustration-empty.svg";
import { useEffect, useState } from "react";
import Results from "./components/Results";

export interface Calculations {
  monthlyRepayment: string;
  totalRepayment: string;
  calculated: boolean;
}

function App() {
  const [calculation, setCalculation] = useState({
    calculated: false,
    monthlyRepayment: "",
    totalRepayment: "",
  });

  const updateCalculation = (newCalculation: Calculations) =>
    setCalculation(newCalculation);

  const resetCalculation = () =>
    setCalculation({
      calculated: false,
      monthlyRepayment: "",
      totalRepayment: "",
    });

  const resetAll = () => {
    resetCalculation();
    // want to reset fields also.
  };

  useEffect(() => {
    console.log("calculation on change : ", calculation);
  }, [calculation]);

  return (
    <Container>
      <div className="grid grid-cols-2">
        <div className="flex flex-col align-center items-center my-6 p-8">
          <div className="flex justify-between gap-12 items-center w-full">
            <h2 className="text-black text-3xl">Mortgage Calculator</h2>
            <a>Clear all</a>
          </div>
          <Form calculation={calculation} setCalculation={updateCalculation} />
        </div>
        <Results illustration={illustration} calculation={calculation} />
      </div>
    </Container>
  );
}

export default App;
