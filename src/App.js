import React, { Component } from "react";

import { Jumbotron } from "react-bootstrap";

import Trainer from "./containers/Trainer/Trainer";
import NavBar from "./containers/NavBar/NavBar";

const testCardsList = [
  {
    notation: "b+1+2",
    hit_level: "m",
    damage: "26",
    speed: "22~23",
    on_block: "+6",
    on_hit: "KND",
    on_ch: "KND",
    properties: [],
    notes: "null",
    most_popular: true,
    image:
      "https://thumbs.gfycat.com/SecondhandPointedAddax-size_restricted.gif",
    answer: "+6",
    header: "b+1+2",
    choices: ["-12", "-11~-10?", "+6", "-13"]
  },
  {
    notation: "4, 1",
    hit_level: "h, h",
    damage: "15,12",
    speed: "12",
    on_block: "-6",
    on_hit: "+8",
    on_ch: "+8",
    properties: [],
    notes: "null",
    most_popular: true,
    image:
      "https://thumbs.gfycat.com/FlimsyUnawareAmbushbug-size_restricted.gif",
    answer: "-6",
    header: "4, 1",
    choices: ["-11~-10?", "-12", "-6", "-13"]
  },
  {
    notation: "f, f, f+2",
    hit_level: "m",
    damage: "25",
    speed: "15~17 (18~)",
    on_block: "+5~+6",
    on_hit: "KND",
    on_ch: "TFU",
    properties: ["WR"],
    notes: "null",
    most_popular: true,
    image: "https://thumbs.gfycat.com/SoreHandsomeEquine-size_restricted.gif",
    answer: "+5~+6",
    header: "f, f, f+2",
    choices: ["-13", "+5~+6", "-12", "-11~-10?"]
  },
  {
    notation: "qcf+2",
    hit_level: "m",
    damage: "25",
    speed: "18(20~)",
    on_block: "-13",
    on_hit: "Launch (JG?)",
    on_ch: "Launch (JG?)",
    properties: [],
    notes: "null",
    most_popular: true,
    image: "https://thumbs.gfycat.com/IllFrighteningKid-size_restricted.gif",
    answer: "-13",
    header: "qcf+2",
    choices: ["-7", "-11~-10?", "-13", "-12"]
  },
  {
    notation: "f, F+1+2",
    hit_level: "h(Throw)",
    damage: "45",
    speed: "12",
    on_block: "null",
    on_hit: "Throw(KND)",
    on_ch: "null",
    properties: ["Grab", "Floorbreak"],
    notes: "Break: 1+2",
    most_popular: true,
    image:
      "https://thumbs.gfycat.com/ConsiderateSociableGermanpinscher-size_restricted.gif",
    answer: "null",
    header: "f, F+1+2",
    choices: ["-13", "-12", "-11~-10?", "null"]
  },
  {
    notation: "d/f+2",
    hit_level: "m",
    damage: "14",
    speed: "15~16",
    on_block: "-12~-11",
    on_hit: "Launch (JG?)",
    on_ch: "Launch (JG?)",
    properties: [],
    notes: "null",
    most_popular: true,
    image:
      "https://thumbs.gfycat.com/CautiousRealAnemonecrab-size_restricted.gif",
    answer: "-12~-11",
    header: "d/f+2",
    choices: ["-13", "-12~-11", "-11~-10?", "-12"]
  },
  {
    notation: "d+2",
    hit_level: "l (TC)",
    damage: "17",
    speed: "18 RC",
    on_block: "-13",
    on_hit: "0s",
    on_ch: "+10~gs?",
    properties: ["HighCrush"],
    notes: "null",
    most_popular: true,
    image:
      "https://thumbs.gfycat.com/RectangularLimpDeermouse-size_restricted.gif",
    answer: "-13",
    header: "d+2",
    choices: ["-12", "-11~-10?", "-13", "-7"]
  },
  {
    notation: "b+4, 3",
    hit_level: "m, h",
    damage: "15,22",
    speed: "15",
    on_block: "-9",
    on_hit: "KND",
    on_ch: "KND",
    properties: [],
    notes: "Tail spin",
    most_popular: true,
    image:
      "https://thumbs.gfycat.com/VigorousRegalIndigobunting-size_restricted.gif",
    answer: "-9",
    header: "b+4, 3",
    choices: ["-13", "-9", "-11~-10?", "-12"]
  },
  {
    notation: "d/f+4",
    hit_level: "m",
    damage: "14",
    speed: "12",
    on_block: "-9",
    on_hit: "+2",
    on_ch: "+2",
    properties: [],
    notes: "null",
    most_popular: true,
    image:
      "https://thumbs.gfycat.com/SingleFarflungHypsilophodon-size_restricted.gif",
    answer: "-9",
    header: "d/f+4",
    choices: ["-12", "-13", "-11~-10?", "-9"]
  },
  {
    notation: "1, 2, 1",
    hit_level: "h, m, m",
    damage: "7,8,20",
    speed: "10",
    on_block: "-14?",
    on_hit: "KND",
    on_ch: "CS",
    properties: [],
    notes: "null",
    most_popular: true,
    image: "https://thumbs.gfycat.com/JoyousUnrulyCurlew-size_restricted.gif",
    answer: "-14?",
    header: "1, 2, 1",
    choices: ["-12", "-13", "-14?", "-11~-10?"]
  },
  {
    notation: "b+4, 2, 1",
    hit_level: "m, m, h",
    damage: "15,15,17",
    speed: "15",
    on_block: "+1?",
    on_hit: "+5?",
    on_ch: "+5?",
    properties: [],
    notes: "null",
    most_popular: true,
    image:
      "https://thumbs.gfycat.com/HotAcrobaticArabianoryx-size_restricted.gif",
    answer: "+1?",
    header: "b+4, 2, 1",
    choices: ["-11~-10?", "+1?", "-12", "-13"]
  },
  {
    notation: "d/f+1",
    hit_level: "m",
    damage: "13",
    speed: "13",
    on_block: "-2",
    on_hit: "+7",
    on_ch: "+7",
    properties: [],
    notes: "null",
    most_popular: true,
    image:
      "https://thumbs.gfycat.com/DrearyUnknownBlowfish-size_restricted.gif",
    answer: "-2",
    header: "d/f+1",
    choices: ["-12", "-11~-10?", "-2", "-13"]
  },
  {
    notation: "qcf+3",
    hit_level: "l (TC)",
    damage: "17(,20)",
    speed: "17 RC(19~)",
    on_block: "-14",
    on_hit: "-1s",
    on_ch: "Throw(KND)",
    properties: [],
    notes: "null",
    most_popular: true,
    image:
      "https://thumbs.gfycat.com/AlarmingImperturbableGannet-size_restricted.gif",
    answer: "-14",
    header: "qcf+3",
    choices: ["-14", "-13", "-11~-10?", "-12"]
  },
  {
    notation: "qcf+1",
    hit_level: "h",
    damage: "20",
    speed: "15(17~)",
    on_block: "-1",
    on_hit: "CS",
    on_ch: "CS",
    properties: [],
    notes: "null",
    most_popular: true,
    image:
      "https://thumbs.gfycat.com/WiltedGiganticCaterpillar-size_restricted.gif",
    answer: "-1",
    header: "qcf+1",
    choices: ["-11~-10?", "-12", "-1", "-13"]
  },
  {
    notation: "u/f+4",
    hit_level: "m (TJ)",
    damage: "21",
    speed: "22~23",
    on_block: "-9~-8",
    on_hit: "KND",
    on_ch: "KND",
    properties: [],
    notes: "null",
    most_popular: true,
    image:
      "https://thumbs.gfycat.com/ChillyGrossAmazondolphin-size_restricted.gif",
    answer: "-9~-8",
    header: "u/f+4",
    choices: ["-9~-8", "-13", "-12", "-11~-10?"]
  }
];

const testRoundObj = {
  userName: "userName",
  character: "Dragunov",
  filter: "Most Popular",
  property: "On Block",
  cards: testCardsList
};

class App extends Component {
  render() {
    const { character, filter, property } = testRoundObj;
    return (
      <div>
        <NavBar character={character} filter={filter} property={property} />

        <div className="container" style={{ maxWidth: 900, marginTop: 0 }}>
          <Jumbotron>
            <Trainer round={testRoundObj} style={{ textAlign: "center" }} />
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default App;
