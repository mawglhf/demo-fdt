import _ from "lodash";

export const allFilterNames = [
  "Most Popular",
  "Block Punishable",
  "While Standing",
  "Full Crouch",
  "Strings",
  "Throws",
  "Stance"
];

/**
 * TODO: Completely fill allStanceNames
 */
const allStanceNames = ["AOP", "HYP", "RDS"];

const stanceFn = move => {
  const notation = move["notation"];
  return allStanceNames.forEach(function(stance) {
    if (_.includes(notation, stance)) {
      return true;
    } else {
      return false;
    }
  });
};

/**
 * TODO: handle question marks, ex: "-14?"
 */
const blockPunishableFn = move => {
  const onBlock = move["on_block"]; // = "-36" or "-12~-11"
  if (_.includes(onBlock, "~")) {
    const arr = onBlock.split("~"); // ["-12", "-11"]
    const arrOfNums = [];
    arrOfNums.push(_.toNumber(arr[0]), _.toNumber(arr[1])); // [-12, -11]
    return arrOfNums[0] <= -10 || arrOfNums[1] <= -10; // false
  } else if (_.includes(onBlock, "null")) {
    return false;
  } else {
    return _.toNumber(onBlock) <= -10; // false
  }
};

const mostPopularFn = move => {
  if (move["most_popular"]) {
    return true;
  } else {
    return false;
  }
};

const whileStandingFn = move => move["notation"].includes("WS");

const fullCrouchFn = move => move["notation"].includes("FC");

const stringsFn = move => move["hit_level"].includes(", ");

const throwsFn = move => move["on_block"].includes("null");

const allFiltersArr = [
  {
    label: "Most Popular",
    key: "most_popular",
    method: mostPopularFn
  },
  {
    label: "Block Punishable",
    name: "block_punishable",
    method: blockPunishableFn
  },
  {
    label: "While Standing",
    key: "while_standing",
    method: whileStandingFn
  },
  {
    label: "Strings",
    key: "strings",
    method: stringsFn
  },
  {
    label: "Full Crouch",
    key: "full_crouch",
    method: fullCrouchFn
  },
  {
    label: "Throws",
    key: "throws",
    method: throwsFn
  },
  {
    label: "Stance",
    key: "stance",
    method: stanceFn
  }
];

const getFilterFn = filterName => {
  const filteredArr = allFiltersArr.filter(obj => obj.label === filterName);
  console.log(filteredArr[0].method);
  return filteredArr[0].method;
};

const filterMoves = (moves, filterName) => {
  const filterFn = getFilterFn(filterName);
  return _.shuffle(_.filter(moves, filterFn));
};

export default filterMoves;
