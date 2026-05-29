import "./style.css";
import { createElement } from "./helpers/domHelper";
import { fighters } from "./data/fighters";

function createFighterCard(fighter) {
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

  return fighterElement;
}

const rootElement = document.querySelector("#app");

const titleElement = createElement({
  tagName: "h1",
});
titleElement.innerText = "Street Fighter";

const listElement = createElement({
  tagName: "div",
  className: "fighters-list",
});

fighters.forEach((fighter) => {
  const fighterElement = createFighterCard(fighter);
  listElement.append(fighterElement);
});

rootElement.append(titleElement, listElement);
