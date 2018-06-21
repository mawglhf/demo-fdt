import _ from "lodash";

// QCF = 112, QCB = 49, "f, n, d," = 91,
export const allFilterNames = [
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

/**
 * TODO: Completely fill allStanceNames
 * TODO: ALSO CONSIDER AN ALTERNATE STANCE LIST: BT, SS,
 *
 * TODO: STANCES TO DOUBLE CHECK: TNT, GUP
 */
const allStanceNames = [
  "TPORT",
  "DFLIP",
  "DBT",
  "DES",
  "SBT",
  "LCT",
  "BAL",
  "TNT",
  "GUP",
  "STB",
  "FLY",
  "RLX",
  "HSP",
  "MG",
  "KNP",
  "STC",
  "GOL",
  "SG",
  "HS",
  "RAI",
  "LFF",
  "LFS",
  "RFF",
  "RFS",
  "CSK",
  "SIT",
  "ZEN",
  "CDS",
  "SWB",
  "SWS",
  "HAR",
  "RSS",
  "DVK",
  "HBS",
  "ROL",
  "DEN",
  "SEN",
  "DSS",
  "TFS",
  "HMS",
  "MS",
  "BOK",
  "KNK",
  "SCT",
  "TWIST",
  "HAZ",
  "SAV",
  "SNK",
  "ALB",
  "DCK",
  "FLIK",
  "LWV",
  "PAB",
  "PKB",
  "RWV",
  "SWY",
  "AOP",
  "HYP",
  "RDS",
  "DGF",
  "FLE",
  "INS",
  "KIN",
  "MED",
  "NSS",
  "WFL"
];

const stanceFn = move => {
  const notation = move["notation"];
  return allStanceNames.forEach(stance => {
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
/**
 * Different ways to tell
 * 1. hit_level includes throw.
 *    exceptions:
 * 2. on_block is null.
 *    exceptions: includes jumping moves, all unblockables, stance switching, things that don't hit
 * 3. on_hit includes throw       // 67 matching moves
 *    exceptions: includes hit-throws
 */
const throwsFn = move => move["on_block"].includes("throw");

const sideStepFn = move => move["notation"].includes("SS");

const backTurnedFn = move => move["notation"].includes("BT");

const allFiltersArr = [
  {
    label: "All",
    key: "all",
    method: move => move
  },
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
  },
  {
    label: "Side Step",
    key: "ss",
    method: sideStepFn
  },
  {
    label: "Back Turned",
    key: "bt",
    method: backTurnedFn
  }
];

const getFilterFn = filterName => {
  const filteredArr = allFiltersArr.filter(obj => obj.label === filterName);
  return filteredArr[0].method;
};

const filterMoves = (moves, filterName) => {
  const filterFn = getFilterFn(filterName);
  return _.shuffle(_.filter(moves, filterFn));
};

export default filterMoves;
