import { useState, createContext } from "react";
import "./App.css";

// components
import Accordion from "./components/Accordion";

const CONTENT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl arcu, cursus scelerisque lorem in, pulvinar tincidunt erat. Duis varius commodo varius. Ut interdum lectus ut metus tempus viverra. Quisque quis luctus magna, sit amet tincidunt urna. Aenean eget sollicitudin mi. Praesent ultricies maximus lectus, et efficitur nisl tempor eget. Nullam at massa erat. Fusce semper vitae nisi sit amet egestas. Fusce sed eros nunc. Donec ut ante tempus, convallis eros vitae, commodo lectus. In molestie ipsum nec bibendum hendrerit. Nunc eleifend diam vehicula scelerisque malesuada. Aliquam erat volutpat. Donec vitae purus diam. Sed sed lacinia tellus. Pellentesque venenatis, ante volutpat sodales molestie, velit metus volutpat velit, nec hendrerit risus metus vitae ante. Sed eleifend eros in erat cursus accumsan. Proin vel commodo metus. Vestibulum cursus pretium viverra. Quisque eu sagittis est. Aenean tempor felis leo, sit amet mollis quam dignissim ac. Pellentesque lacinia enim et varius placerat.`;

export const CloseAllContext = createContext();

function useHandleAccordions() {
  const defaultAccordions = {
    details: false,
    about: false,
    contact: false,
    end: false,
  };

  const [display, setDisplay] = useState(defaultAccordions);

  function getDisplay(type) {
    return display[type];
  }

  function getDisplaySetter(type) {
    return (value) => {
      setDisplay((prevDisplay) => {
        return { ...prevDisplay, [type]: value };
      });
    };
  }

  function closeAll() {
    setDisplay(defaultAccordions);
  }

  return {
    getDisplay,
    getDisplaySetter,
    CloseAllProvider,
  };
}

function App() {
  const { getDisplay, getDisplaySetter, CloseAllProvider } = useHandleAccordions();

  return (
    <CloseAllContext.Provider value={closeAll}>
      <Accordion
        accordionData={{ title: "DETAILS", content: CONTENT }}
        accordionLogic={{ display: getDisplay("details"), setDisplay: getDisplaySetter("details") }}
      />
      <Accordion
        accordionData={{ title: "ABOUT US", content: CONTENT }}
        accordionLogic={{ display: getDisplay("about"), setDisplay: getDisplaySetter("about") }}
      />
      <Accordion
        accordionData={{ title: "CONTACT", content: CONTENT }}
        accordionLogic={{ display: getDisplay("contact"), setDisplay: getDisplaySetter("contact") }}
      />
      <Accordion
        accordionData={{ title: "END", content: CONTENT }}
        accordionLogic={{ display: getDisplay("end"), setDisplay: getDisplaySetter("end") }}
      />
    </CloseAllContext.Provider>
  );
}

export default App;
