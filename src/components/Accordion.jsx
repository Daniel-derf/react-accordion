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
  const arrow = !display ? <>↓</> : <>↑</>;

  return { display, changeVisibility, className, arrow };
}

function Accordion({ accordionData, accordionLogic }) {
  const { display, changeVisibility, className, arrow } = useAccordion(accordionLogic);

  return (
    <>
      <h2 className="section" onClick={changeVisibility}>
        {accordionData.title} {arrow}
      </h2>
      <div className={className}>
        <p>{accordionData.content}</p>
      </div>
    </>
  );
}

export default Accordion;
