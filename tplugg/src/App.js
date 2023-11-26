import React from "react";
import SoccerLineUp from "react-soccer-lineup";
import "./styles.css";

export default function App() {
  const eventData = {
    "homeTeamFormation": "4-2-4",
    "vistingTeamFormation": "4-3-3",
  };

  const parseFormation = (formation) => {
    const [df, cam, fw] = formation.split("-").map(Number);
    const lineup = {
      df: Array(df).fill({}),
      cam: Array(cam).fill({}),
      fw: Array(fw).fill({}),
      gk: {},
    };
    return lineup;
  };


  const homeTeam = {
    color: "red",
    squad: parseFormation(eventData.homeTeamFormation),
  };

  const awayTeam = {
    color: "blue",
    squad: parseFormation(eventData.vistingTeamFormation),
  };

  return (
    <div className="App">
      <SoccerLineUp
        size={"responsive"}
        pattern={"lines"}
        awayTeam={awayTeam}
        homeTeam={homeTeam}
      />
    </div>
  );
}
