import "./Accordion.css";

function useAccordion(accordionLogic) {
  const { display, setDisplay, closeAllAccordions } = accordionLogic;

  function changeVisibility() {
    if (!display) {
      closeAllAccordions();
    }
    setDisplay(!display);
  }

  const className = `details ${display ? "open" : ""}`;

  return { display, changeVisibility, className };
}

function Accordion({ accordionData, accordionLogic }) {
  const { isOpen, changeVisibility, className } = useAccordion(accordionLogic);

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
