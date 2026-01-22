import "./style.css";
import { setupCounter } from "./counter";

// const viteImg = document.querySelector<HTMLImageElement>("#vite-logo");
// const tsImg = document.querySelector<HTMLImageElement>("#ts-logo");
// const subaruImg = document.querySelector<HTMLImageElement>("#subaru-logo");
const counter = document.querySelector<HTMLButtonElement>("#counter");

if (!counter) {
  throw new Error("counter not found in index.html");
}

// if (!viteImg || !tsImg || !subaruImg || !counter) {
//   throw new Error("Required elements not found in index.html");
// }

// viteImg.src = viteLogo;
// tsImg.src = typescriptLogo;
// subaruImg.src = subaruLogo;

setupCounter(counter);
