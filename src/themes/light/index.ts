import { Theme } from "@typesDef/themes";
import { createColor } from "@utils/createColor";

const light: Theme = {
  id: 0,
  name: "light",
  colors: {
    primary: "#f8f9fa",
    secondary: "#e9ecef",

    background: {
      primary: "#f8f9fa",
      secondary: "e9ecef",
      contrast: "",
    },
    text: {
      primary: "#212529",
      secondary: createColor(141, 149, 157),
      contrast: "#212529",
    },
    button: {
      background: "",
      text: "",
      outline: "",
    },
  },
};

export default light;
