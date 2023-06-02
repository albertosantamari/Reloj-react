import "./App.css";
import { Countdown } from "./components/Countdown/Countdown";
import { DigitalClock } from "./components/DigitalClock/DigitalClock";
import { Stopwatch } from "./components/Stopwatch/Stopwatch";
function App() {
  return (
    <div className="clockContent">
      <DigitalClock />
      <Countdown />
      <Stopwatch />
    </div>
  );
}

export default App;
