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

let selectedFighters = [];

function showFighterPreview(fighter) {
  const [firstFighter, secondFighter] = selectedFighters;

  if (!firstFighter) {
    selectedFighters = [fighter, secondFighter];
  } else if (!secondFighter) {
    selectedFighters = [firstFighter, fighter];
  } else {
    selectedFighters = [fighter, null];
  }

  console.log("Selected fighters state: ".selectedFighters);
  renderSelectedFighters();
}

function createFighterPreview(fighter) {
  const previewItem = createElement({
    tagName: "div",
    className: "fighter-preview__item",
  });

  if (!fighter) {
    return previewItem;
  }

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

  previewItem.append(imageElement, infoElement);

  return previewItem;
}

function renderSelectedFighters() {
  previewElement.innerText = "";

  const [firstFighter, secondFighter] = selectedFighters;
  const firstPreview = createFighterPreview(firstFighter);
  const secondPreview = createFighterPreview(secondFighter);

  const versusElement = createElement({
    tagName: "div",
    className: "fighter-preview__versus",
  });

  versusElement.innerText = "VS";
  previewElement.append(firstPreview, versusElement, secondPreview);
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
