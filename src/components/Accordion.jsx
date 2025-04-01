import { useState } from "react";

import "./Accordion.css";

function useAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  function changeVisibility() {
    setIsOpen(!isOpen);
  }

  const className = `details ${isOpen ? "open" : ""}`;

  return { isOpen, changeVisibility, className };
}

function Accordion({ title, content }) {
  const { isOpen, changeVisibility, className } = useAccordion();

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
