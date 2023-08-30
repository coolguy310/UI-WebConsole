import { Options } from "$fresh/plugins/twind.ts"
import { Preset } from "twind-core"
import presetAutoprefix from "twind-preset-autoprefix"
import presetTailwind from "twind-preset-tailwind"

export const colors = {
  primary: "#4C4AD2",
  secondary: "#7A77FF",
  accent: "#00CBD8",
  danger: "#E44C4C",
  stroke: "#A2A2A2",
  dark: "#1D1D1F",
  light: "#E8E8E8",
  slate: "#28282A",
  placeholder: "#68686D",
  "primary-black": "#000814",
  "secondary-black": "#12163E",
  "secondary-light": "#403EA8",
  "gray-100": "#7B8493",
  "gray-200": "#C7CACF",
}
export default {
  presets: [presetTailwind() as Preset, presetAutoprefix()],
  selfURL: import.meta.url,
  preflight: {
    "@import": `url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap')`,
  },
  theme: {
    fontFamily: {
      sans: "Poppins, sans-serif",
      inter: "Inter, sans-serif",
    },
    extend: {
      colors,
      borderRadius: {
        "4xl": "2rem",
      },
      lineHeight: {
        "11": "3rem",
        "12": "3.5rem",
      },
      boxShadow: {
        input: "0px 2px 0px 0px #7A77FF",
        "input-dark": "0px 2px 0px 0px #4C4AD2",
      },
    },
  },
} as Options
