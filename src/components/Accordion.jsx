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

function Accordion({ accordionData, closeAllAccordions, display, setDisplay }) {
  const { isOpen, changeVisibility, className } = useAccordion({ closeAllAccordions, display, setDisplay });

  return (
    <>
      <h2 className="section" onClick={changeVisibility}>
        {accordionData.title} {!isOpen ? <>↓</> : <>↑</>}
      </h2>
      <div className={className}>
        <p>{accordionData.content}</p>
      </div>
    </>
  );
}

export default Accordion;
