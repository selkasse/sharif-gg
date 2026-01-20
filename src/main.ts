import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import subaruLogo from "/subaru_svg.svg";
import { setupCounter } from "./counter";

const viteImg = document.querySelector<HTMLImageElement>("#vite-logo");
const tsImg = document.querySelector<HTMLImageElement>("#ts-logo");
const subaruImg = document.querySelector<HTMLImageElement>("#subaru-logo");
const counter = document.querySelector<HTMLButtonElement>("#counter");

if (!viteImg || !tsImg || !subaruImg || !counter) {
  throw new Error("Required elements not found in index.html");
}

viteImg.src = viteLogo;
tsImg.src = typescriptLogo;
subaruImg.src = subaruLogo;

setupCounter(counter);
