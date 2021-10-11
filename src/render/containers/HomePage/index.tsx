import { store, useAppSelector } from "@redux/index";
import ReactLogo from "@assets/icons/react.svg";
import { useState } from "react";
import { incrementCounter, decrementCounter } from "@redux/reducers/count";
import { incrementChar, decrementChar } from "@redux/reducers/characters";

const HomePage = () => {
  const [show, setShow] = useState(true);

  const state = useAppSelector((state) => state);

  const increment = () => {
    store.dispatch(incrementChar());
    store.dispatch(incrementCounter(1));
  };

  const decrement = () => {
    store.dispatch(decrementChar(1));
    store.dispatch(decrementCounter());
  };

  return (
    <div
      style={{
        fontFamily: "Open Sans",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        onClick={() => window.electron.openUrl("https://reactjs.org/")}
        src={ReactLogo}
        className="mb-12 cursor-pointer"
        height={69}
        width={69}
      />

      <div className="font-bold mb-4">
        React + Playwright + Electron + Redux = 😤
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        By&nbsp;
        <div
          onClick={() =>
            window.electron.openUrl("https://github.com/samkomesarook/")
          }
        >
          <strong>Sam</strong>
        </div>
      </div>

      {show ? <pre>{JSON.stringify(state)}</pre> : null}

      <div onClick={() => setShow(!show)}>
        Click here to {show ? "hide" : "show"} your <strong>Redux</strong> store
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <button className="mr-4" onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <div>
        <button
          onClick={async () => {
            window.electron.openPath(await window.store.getPath());
          }}
        >
          Open Store
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={window.electron.quit}>Exit / Quit</button>
        <button className="mac-orange w-24" onClick={window.electron.minimize}>
          Minimize
        </button>
        <button
          className="mac-green ml-auto w-24 text-left"
          onClick={window.electron.maximize}
        >
          Maximize
        </button>
      </div>
    </div>
  );
};

export default HomePage;
