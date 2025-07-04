import { defineConfig, presetUno } from "unocss";
import presetWebFonts from "@unocss/preset-web-fonts";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        sans: "Inter",
        mono: "Fira Code"
      }
    })
  ]
});
