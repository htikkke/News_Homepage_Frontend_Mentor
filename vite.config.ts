import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "https://github.com/htikkke/News_Homepage_Frontend_Mentor.git",
});
