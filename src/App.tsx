import "./App.css";
import Header from "./components/Header/Header";
import Stack from "./components/Stack/Stack";
import Welcomepage from "./pages/Welcomepage/Welcomepage";

function App() {
  return (
    <Stack>
      <Header />
      <Welcomepage />
      {/* <h1>
        Hello, my name is Thamjith Thaha, I'm an engineer working in the
        software industry for half a decade.
      </h1> */}
    </Stack>
  );
}

export default App;
