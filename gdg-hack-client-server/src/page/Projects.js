import React, { useState } from "react";
import teamsData from "../data/teamsData.js";
import Image from "../Logo/presentation video.png";
function Projects() {
  const filteredteams = teamsData;
  const [selectedteamIndex, setSelectedteamIndex] = useState(""); // Initialisation à 0 pour sélectionner par défaut le premier projet

  const handleClick = (team) => {
    setSelectedteamIndex(team);
  };
  return (
    <div className="grid grid-cols-2 mx-20 my-16 ali items-center">
      <div className="flex flex-col mx-20 my-16">
        <h1 className="text-4xl mb-4 ml-2">Check participant’s work</h1>
        {filteredteams.map((team, index) => (
          <div
            key={index}
            style={{
              backgroundColor:
                selectedteamIndex === index ? "#C8E8FF" : "#F7F7F7",
            }}
            className="flex flex-col py-12 px-10 rounded-2xl mx-2 w-full h-20 justify-center mb-4 "
            onClick={() => handleClick(team)}
          >
            <h1 className="font-bold text-2xl">{team.name}</h1>
            <p className="">{team.projectabout}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <div
          style={{ backgroundColor: "#F7F7F7" }}
          className="flex flex-col py-12 px-10 rounded-2xl mx-2 w-full h-20 justify-center mb-4 "
        >
          <h2 style={{ color: "#257EBC" }} className="text-[25px] font-bold">
            Presentation video
          </h2>
          <img src={Image} className="w-[90%]"></img>
          <h1 className="font-bold text-xl mb-1 ml-1">
            {selectedteamIndex?.name}
          </h1>
          <p className="ml-1 mb-5">{selectedteamIndex?.projectabout}</p>
          <h1 className=""></h1>
          <ul className="flex flex-row ">
            <li className="mx-2 ml-1">{selectedteamIndex?.participants[0]}</li>
            <li className="mx-2">{selectedteamIndex?.participants[1]}</li>
            <li className="mx-2">{selectedteamIndex?.participants[2]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
