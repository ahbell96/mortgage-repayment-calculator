import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Container from "./components/Container";
import illustration from "./assets/images/illustration-empty.svg";
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

  return (
    <Container>
      <div className="grid grid-cols-2">
        <Form
          calculation={calculation}
          setCalculation={updateCalculation}
          resetCalculation={resetCalculation}
        />
        <Results illustration={illustration} calculation={calculation} />
      </div>
    </Container>
  );
}

export default App;
