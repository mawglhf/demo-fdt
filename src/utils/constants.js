import allData from "./t7data.json";

export const characterNames = Object.keys(allData);
export const filterNames = [
  "All",
  "Most Popular",
  "Block Punishable",
  "While Standing",
  "Stance",
  "Full Crouch",
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
