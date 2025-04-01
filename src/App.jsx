import { useState } from "react";

import "./App.css";

function useAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  function changeVisibility() {
    setIsOpen(!isOpen);
  }

  const className = `details ${isOpen ? "open" : ""}`;

  return { isOpen, changeVisibility, className };
}

function App() {
  const { isOpen, changeVisibility, className } = useAccordion();

  return (
    <>
      <h2 className="section" onClick={changeVisibility}>
        DETAILS {isOpen ? <>↓</> : <>↑</>}
      </h2>
      <div className={className}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam tellus, ultrices quis lorem sit amet, laoreet
          interdum nulla. Vivamus velit mauris, egestas at felis ac, rutrum semper dolor. Pellentesque iaculis diam
          nibh, nec egestas tortor venenatis vitae. Quisque tellus urna, ultrices non blandit at, laoreet lacinia leo.
          Aliquam aliquet nisi vehicula est aliquet pulvinar bibendum eget magna. Pellentesque et quam justo. Duis at
          felis ultricies, blandit massa iaculis, tincidunt neque. Proin non nunc vitae dui faucibus rutrum ac nec dui.
          Mauris vulputate sit amet ante vel feugiat. Donec sit amet fringilla diam, in euismod turpis.
        </p>
      </div>
    </>
  );
}

export default App;
