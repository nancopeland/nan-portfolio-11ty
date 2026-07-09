import React from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";

function ImgFlexGallery({ display, items }) {
  return React.createElement(
    React.Fragment,
    null,
    items.map((item, index) => {
      const children = [
        React.createElement("img", {
          key: `img-${index}`,
          src: item.src,
          alt: item.alt,
        }),
      ];

      if (item.captionHtml) {
        children.push(
          React.createElement("span", {
            key: `caption-${index}`,
            className: "caption",
            dangerouslySetInnerHTML: { __html: item.captionHtml },
          })
        );
      }

      return React.createElement(
        "div",
        { key: `item-${index}`, className: display },
        children
      );
    })
  );
}

function getDisplayFromWrapper(wrapper) {
  const count = wrapper.querySelectorAll(
    ".img-flex-50, .img-flex-33, .img-flex-25"
  ).length;

  if (count === 2) return "img-flex-50";
  if (count === 3) return "img-flex-33";
  if (count === 4) return "img-flex-25";

  return null;
}

function collectItems(wrapper, display) {
  const cards = Array.from(wrapper.children).filter((child) =>
    child.classList.contains(display)
  );

  return cards
    .map((card) => {
      const img = card.querySelector("img");
      if (!img) return null;

      const caption = card.querySelector(".caption");

      return {
        src: img.getAttribute("src") || "",
        alt: img.getAttribute("alt") || "",
        captionHtml: caption ? caption.innerHTML : "",
      };
    })
    .filter(Boolean);
}

function mountImgFlexComponents() {
  const wrappers = document.querySelectorAll(".img-flex-wrapper");

  wrappers.forEach((wrapper) => {
    const display = getDisplayFromWrapper(wrapper);
    if (!display) return;

    const items = collectItems(wrapper, display);
    if (items.length === 0) return;

    const root = createRoot(wrapper);
    root.render(React.createElement(ImgFlexGallery, { display, items }));
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountImgFlexComponents);
} else {
  mountImgFlexComponents();
}
