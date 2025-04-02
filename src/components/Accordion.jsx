import { useState } from "react";

import "./Accordion.css";

function useAccordion({ display, setDisplay, closeAllAccordions }) {
  function changeVisibility() {
    if (!display) {
      closeAllAccordions();
    }
    setDisplay(!display);
  }

  const className = `details ${display ? "open" : ""}`;

  return { display, changeVisibility, className };
}

function Accordion({ title, content, closeAllAccordions, display, setDisplay }) {
  const { isOpen, changeVisibility, className } = useAccordion({ closeAllAccordions, display, setDisplay });

  return (
    <>
      <h2 className="section" onClick={changeVisibility}>
        {title} {!isOpen ? <>↓</> : <>↑</>}
      </h2>
      <div className={className}>
        <p>{content}</p>
      </div>
    </>
  );
}

export default Accordion;
