export const gradientBgPicker = (type: string | undefined) => {
  switch (type) {
    case "water":
      return "bg-gradient-to-b from-waterDark to-waterLight";
    case "ghost":
      return "bg-gradient-to-b from-ghostDark to-ghostLight";
    case "poison":
      return "bg-gradient-to-b from-poisonDark to-poisonLight";
    case "grass":
      return "bg-gradient-to-b from-grassDark to-grassLight";
    case "normal":
      return "bg-gradient-to-b from-normalDark to-normalLight";
    case "fire":
      return "bg-gradient-to-b from-fireDark to-fireLight";
    case "flying":
      return "bg-gradient-to-b from-flyingDark to-flyingLight";
    case "bug":
      return "bg-gradient-to-b from-bugDark to-bugLight";
    case "electric":
      return "bg-gradient-to-b from-electricDark to-electricLight";
    case "ground":
      return "bg-gradient-to-b from-groundDark to-groundLight";
    case "fairy":
      return "bg-gradient-to-b from-fairyDark to-fairyLight";
    case "fighting":
      return "bg-gradient-to-b from-fightingDark to-fightingLight";
    case "psychic":
      return "bg-gradient-to-b from-psychicDark to-psychicLight";
    case "steel":
      return "bg-gradient-to-b from-steelDark to-steelLight";
    case "ice":
      return "bg-gradient-to-b from-iceDark to-iceLight";
    case "dragon":
      return "bg-gradient-to-b from-dragonDark to-dragonLight";
    case "rock":
      return "bg-gradient-to-b from-rockDark to-rockLight";
    default:
      return "bg-white";
  }
};
