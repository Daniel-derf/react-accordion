import { useState } from "react";
import "./App.css";

// components
import Accordion from "./components/Accordion";

const CONTENT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl arcu, cursus scelerisque lorem in, pulvinar tincidunt erat. Duis varius commodo varius. Ut interdum lectus ut metus tempus viverra. Quisque quis luctus magna, sit amet tincidunt urna. Aenean eget sollicitudin mi. Praesent ultricies maximus lectus, et efficitur nisl tempor eget. Nullam at massa erat. Fusce semper vitae nisi sit amet egestas. Fusce sed eros nunc. Donec ut ante tempus, convallis eros vitae, commodo lectus. In molestie ipsum nec bibendum hendrerit. Nunc eleifend diam vehicula scelerisque malesuada. Aliquam erat volutpat. Donec vitae purus diam. Sed sed lacinia tellus. Pellentesque venenatis, ante volutpat sodales molestie, velit metus volutpat velit, nec hendrerit risus metus vitae ante. Sed eleifend eros in erat cursus accumsan. Proin vel commodo metus. Vestibulum cursus pretium viverra. Quisque eu sagittis est. Aenean tempor felis leo, sit amet mollis quam dignissim ac. Pellentesque lacinia enim et varius placerat.`;

function useHandleAccordions() {
  const [displayDetails, setDisplayDetails] = useState(false);
  const [displayAbout, setDisplayAbout] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);
  const [displayEnd, setDisplayEnd] = useState(false);

  function closeAll() {
    const accordions = [
      [displayDetails, setDisplayDetails],
      [displayAbout, setDisplayAbout],
      [displayContact, setDisplayContact],
      [displayEnd, setDisplayEnd],
    ];

    for (const accordion of accordions) {
      const isActive = accordion[0];

      if (isActive) {
        const accordionSetter = accordion[1];

        accordionSetter(false);
      }
    }
  }

  const displayTypes = {
    details: [displayDetails, setDisplayDetails],
    about: [displayAbout, setDisplayAbout],
    contact: [displayContact, setDisplayContact],
    end: [displayEnd, setDisplayEnd],
  };

  function getDisplay(type) {
    return displayTypes[type][0];
  }

  function getDisplaySetter(type) {
    return displayTypes[type][1];
  }

  return {
    getDisplay,
    getDisplaySetter,
    closeAll,
  };
}

function App() {
  const { getDisplay, getDisplaySetter, closeAll } = useHandleAccordions();

  return (
    <>
      <Accordion
        accordionData={{ title: "DETAILS", content: CONTENT }}
        accordionLogic={{ closeAll, display: getDisplay("details"), setDisplay: getDisplaySetter("details") }}
      />
      <Accordion
        accordionData={{ title: "ABOUT US", content: CONTENT }}
        accordionLogic={{ closeAll, display: getDisplay("about"), setDisplay: getDisplaySetter("about") }}
      />
      <Accordion
        accordionData={{ title: "CONTACT", content: CONTENT }}
        accordionLogic={{ closeAll, display: getDisplay("contact"), setDisplay: getDisplaySetter("contact") }}
      />
      <Accordion
        accordionData={{ title: "END", content: CONTENT }}
        accordionLogic={{ closeAll, display: getDisplay("end"), setDisplay: getDisplaySetter("end") }}
      />
    </>
  );
}

export default App;
