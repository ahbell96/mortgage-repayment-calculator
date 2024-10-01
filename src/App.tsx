import "./App.css";
import Form from "./components/Form";
import Container from "./components/Container";

function App() {
  return (
    <Container>
      <div className="flex flex-row align-center items-center my-6">
        <div className="flex justify-between gap-12 items-center w-full">
          <h2 className="text-black text-3xl">Mortgage Calculator</h2>
          <a>Clear all</a>
        </div>
      </div>
      <Form />
    </Container>
  );
}

export default App;
