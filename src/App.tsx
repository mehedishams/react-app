import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import AlertWithChildren from "./components/AlertWithChildren";
import Button from "./components/Button";
import ButtonWithColourParam from "./components/ButtonWithColourParam";
import { useState } from "react";

function App() {
  const cities: string[] = ["Dhaka", "Khulna"];
  const heading: string = "Bangladesh cities";

  const cities2: string[] = ["Wollongong", "Sydney"];
  const heading2: string = "Australian cities";

  const cities3: string[] = [];
  const heading3: string = "Unknown cities";

  const handleSelectItem = (item: string) => {
    setSelectedItemText(item);
    setSelectedAlertVisibility(true);
  };

  const handleButtonClick = (msg: string) => {
    setButtonClickText(msg);
    setButtonAlertVisibility(true);
  };

  // Hook
  const [buttonAlertVisible, setButtonAlertVisibility] = useState(false);
  const [selectedAlertVisible, setSelectedAlertVisibility] = useState(false);

  const [selectedItemText, setSelectedItemText] = useState("");
  const [buttonClickText, setButtonClickText] = useState("");

  return (
    <>
      <div>
        {selectedAlertVisible && (
          <Alert
            text={selectedItemText}
            color="secondary"
            onClose={() => setSelectedAlertVisibility(false)}
          ></Alert>
        )}
      </div>

      <div>
        {buttonAlertVisible && (
          <Alert
            text={buttonClickText}
            color="primary"
            onClose={() => setButtonAlertVisibility(false)}
          ></Alert>
        )}
      </div>
      <h1>Using buttons</h1>
      <div>
        <Button buttonName="My new button" />
      </div>

      <h1>Using buttons with Params</h1>
      <div>
        <ButtonWithColourParam
          buttonText="My new button"
          colour="secondary"
          onButtonClick={handleButtonClick}
        />
      </div>

      <h1>Using buttons with optional colour</h1>
      <div>
        <ButtonWithColourParam
          buttonText="My new button"
          onButtonClick={handleButtonClick}
        />
      </div>

      <h1>Alert with props</h1>
      <div>
        <Alert text="Hello world" color="primary"></Alert>
      </div>

      <h1>Alert with children</h1>
      <div>
        <AlertWithChildren>
          <span>I am a child.</span>
        </AlertWithChildren>
      </div>

      <ListGroup
        items={cities}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={cities2}
        heading={heading2}
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={cities3}
        heading={heading3}
        onSelectItem={handleSelectItem}
      />
    </>
  );
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App;
