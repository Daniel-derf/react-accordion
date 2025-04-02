import { CloseAllContext } from "../App";
import "./Accordion.css";
import { useContext } from "react";

function useAccordion(accordionLogic) {
  const closeAll = useContext(CloseAllContext);

  const { display, setDisplay } = accordionLogic;

  const changeVisibility = () => {
    if (!display) {
      closeAll();
    }
    setDisplay(!display);
  };

  const className = `details ${display ? "open" : ""}`;
  const arrow = !display ? <>↓</> : <>↑</>;

  return { changeVisibility, className, arrow };
}

function Accordion({ accordionData, accordionLogic }) {
  const { changeVisibility, className, arrow } = useAccordion(accordionLogic);

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
