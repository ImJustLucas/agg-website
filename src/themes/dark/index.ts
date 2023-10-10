import { Theme } from "@typesDef/themes";
import { createColor } from "@utils/createColor";

const dark: Theme = {
  id: 0,
  name: "dark",
  colors: {
    primary: "#212529",
    secondary: "#343a40",

    background: {
      primary: "#212529",
      secondary: "#343a40",
      contrast: "",
    },
    text: {
      primary: "#2b2d42",
      secondary: createColor(141, 149, 157),
      contrast: "#f8f9fa",
    },
    button: {
      background: "",
      text: "",
      outline: "",
    },
  },
};

export default dark;
