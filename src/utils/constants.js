import allData from "./t7data.json";

export const characterNames = Object.keys(allData);
export const filterNames = [
  "All",
  "most_popular",
  "BlockPunishable",
  "Standing",
  "WhileStanding",
  "Stance",
  "FullCrouch",
  "Strings",
  "Throws"
];
export const propertyNames = [
  "on_block",
  "on_hit",
  "speed",
  "notation",
  "active",
  "recovery"
];
