import allData from "./t7data.json";

export const characterNames = Object.keys(allData);
export const filterNames = [
  "All",
  "Most Popular",
  "Block Punishable",
  "Throws",
  "Strings",
  "While Standing",
  "Full Crouch",
  "Side Step",
  "Stance",
  "Back Turned"
];
export const propertyNames = ["on_block", "on_hit", "speed"];

// export const testUserRoundHistory = {}
// export const testRoundCardsList = []
