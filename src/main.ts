import { createApp } from "vue";
import App from "./App.vue";

const setStyle = (dir: string) => {
  const oldLink = document.getElementById("dynamic-style") as HTMLLinkElement;
  if (oldLink) oldLink.remove();
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = dir === "rtl" ? "/src/tailwind.rtl.css" : "/src/tailwind.css";
  document.head.appendChild(link);
};

const html = document.documentElement;
let currentDir = html.getAttribute("dir") || "ltr";

setStyle(currentDir);

const observer = new MutationObserver(() => {
  const newDir = html.getAttribute("dir") || "ltr";
  if (newDir !== currentDir) {
    currentDir = newDir;
    setStyle(currentDir);
  }
});

observer.observe(html, { attributes: true, attributeFilter: ["dir"] });

createApp(App).mount("#app");
