import "./App.css";
import Form from "./components/Form";
import Container from "./components/Container";
import illustration from "./assets/images/illustration-empty.svg";

function App() {
  return (
    // <div className="flex text-[#fff]">
    <Container>
      <div className="grid grid-cols-2">
        <div className="flex flex-col align-center items-center my-6 p-8">
          <div className="flex justify-between gap-12 items-center w-full">
            <h2 className="text-black text-3xl">Mortgage Calculator</h2>
            <a>Clear all</a>
          </div>
          <Form />
        </div>

        <div
          className="bg-[#133040] text-[#fff] flex flex-col justify-center items-center content-center"
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
      </div>
    </Container>

    // </div>
  );
}

export default App;
