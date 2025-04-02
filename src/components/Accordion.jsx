import "./Accordion.css";

function useAccordion(accordionLogic) {
  const { display, setDisplay, closeAll } = accordionLogic;

  function changeVisibility() {
    if (!display) {
      closeAll();
    }
    setDisplay(!display);
  }

  const className = `details ${display ? "open" : ""}`;

  return { display, changeVisibility, className };
}

function Accordion({ accordionData, accordionLogic }) {
  const { display, changeVisibility, className } = useAccordion(accordionLogic);

  return (
    <>
      <h2 className="section" onClick={changeVisibility}>
        {accordionData.title} {!display ? <>↓</> : <>↑</>}
      </h2>
      <div className={className}>
        <p>{accordionData.content}</p>
      </div>
    </>
  );
}

export default Accordion;
