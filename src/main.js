import "./style.css";
import { createElement } from "./helpers/domHelper";
import { fighters } from "./data/fighters";

function createFighterCard(fighter, onSelect) {
  const fighterElement = createElement({
    tagName: "div",
    className: "fighter-card",
  });

  const imageElement = createElement({
    tagName: "img",
    className: "fighter-card__image",
    attributes: {
      src: fighter.source,
      alt: fighter.name,
      title: fighter.name,
    },
  });

  const nameElement = createElement({
    tagName: "span",
    className: "fighter-card__name",
  });

  nameElement.innerText = fighter.name;
  fighterElement.append(imageElement, nameElement);

  fighterElement.addEventListener("click", () => {
    onSelect(fighter);
  });

  return fighterElement;
}

const rootElement = document.querySelector("#app");

const titleElement = createElement({
  tagName: "h1",
});
titleElement.innerText = "Street Fighter";

const previewElement = createElement({
  tagName: "div",
  className: "fighter-preview",
});

function showFighterPreview(fighter) {
  previewElement.innerText = fighter.name;
}

const listElement = createElement({
  tagName: "div",
  className: "fighters-list",
});

fighters.forEach((fighter) => {
  const fighterElement = createFighterCard(fighter, showFighterPreview);
  listElement.append(fighterElement);
});

rootElement.append(titleElement, previewElement, listElement);
