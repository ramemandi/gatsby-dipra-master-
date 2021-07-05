import { ColorPalette } from "wmk-color-palette";

// NOTE: CURRENTLY NOT WORKING
// ERROR IN CONSOLE WHEN YOU TRY TO USE THIS IN ANOTHER FILE: "Cannot read property 'colors' of undefined"

export const colors = new ColorPalette([
  {
    value: "#fefefe",
    group: "white",
    reverse: true,
  },
  {
    value: "#394A58",
    group: "gray",
    text: true,
  },
  {
    value: "#7AB800",
    group: "green",
    primary: true,
  },
  {
    value: "#00AFD8",
    group: "blue",
    accent: true,
  },
  {
    value: "#001743",
    group: "blue",
    secondary: true,
  },
  {
    value: "#0a0a0a",
    group: "black",
    black: true,
  },
  { value: "#c50b0b", group: "red" },
]);
