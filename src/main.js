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
  previewElement.innerText = "";

  const imageElement = createElement({
    tagName: "img",
    className: "fighter-preview__image",
    attributes: {
      src: fighter.source,
      alt: fighter.name,
      title: fighter.name,
    },
  });

  const infoElement = createElement({
    tagName: "div",
    className: "fighter-preview__info",
  });

  const nameElement = createElement({
    tagName: "div",
    className: "fighter-preview__name",
  });
  nameElement.innerText = fighter.name;

  const statsElement = createElement({
    tagName: "div",
    className: "fighter-preview__stats",
  });
  statsElement.innerText = `Health: ${fighter.health} | Attack: ${fighter.attack} | Defense: ${fighter.defense}`;

  infoElement.append(nameElement, statsElement);

  previewElement.append(imageElement, infoElement);
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
