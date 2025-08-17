import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStitches } from "@stitches/react";

const { globalCss, styled } = createStitches();

const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    fontFamily:
      "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans','Helvetica Neue'",
    WebkitTapHighlightColor: "transparent",
  },
  body: {
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    gap: "1rem",
    backgroundImage: "linear-gradient(to right bottom, magenta, black, mediumturquoise)",
  },
});

const Circle = styled("article", {
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: 1,
  backgroundImage: "var(--bg)",
  backgroundSize: "cover",
  backgroundPosition: "right",
  transition: "clip-path 0.5s ease",

  "&:nth-child(1)": {
    clipPath: "circle(250px at 0% 0%)",
  },
  "&:nth-child(2)": {
    clipPath: "circle(250px at 100% 0%)",
  },
  "&:nth-child(3)": {
    clipPath: "circle(250px at 100% 100%)",
  },
  "&:nth-child(4)": {
    clipPath: "circle(250px at 0% 100%)",
  },
  "&:hover": {
    zIndex: 2,
    clipPath: "circle(1200px at 50% 50%)",
  },
});

function App() {
  globalStyles();
  return (
    <>
      <Circle style={{ "--bg": "url('assets/n1.avif')" }} />
      <Circle style={{ "--bg": "url('assets/n2.avif')" }} />
      <Circle style={{ "--bg": "url('assets/n3.avif')" }} />
      <Circle style={{ "--bg": "url('assets/n4.avif')" }} />
    </>
  );
}

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
