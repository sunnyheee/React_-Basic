import "./App.css";
import Welcome from "./Welcome";
import Clock from "./Clock";

function App() {
  const formatName = (name) => {
    return `${name.firstName} ${name.lastName}`;
  };
  const name = {
    firstName: "sunny",
    lastName: "park",
  };
  function handleClick() {
    console.log("click");
  }
  return (
    <>
      <h1>Hello, {formatName(name)} </h1>
      <div>
        // component
        <Welcome name="sara" />
        <Welcome name="jay" />
        <Welcome name="lisa" />
        <Clock />
        <h1 onClick={handleClick}>click me</h1>
      </div>
    </>
  );
}

export default App;
