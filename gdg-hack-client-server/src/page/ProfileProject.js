import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import teamPic from "../Logo/teamPict.png";
import { IoAddCircleOutline } from "react-icons/io5";
import ai from "../Logo/ai.svg";
import { main } from "../component/Openai.js";
import { main_ai } from "../component/OpenaiJudgment.js";

function ProfileProject() {
  const goBack = () => {
    window.history.back();
  };

  const [userRole, setUserRole] = useState("participant");
  const isParticipant = userRole === "participant";
  const isJudge = userRole === "judge";
  const isAdmin = userRole === "admin";

  function getRandomColors() {
    const colors = [
      "rgb(0, 174, 82)",
      "RGB(248, 222, 0)",
      "RGB(37, 126, 188)",
      " RGB(248, 144, 0)",
    ];
    const randomColors = [];

    for (let i = 0; i < 4; i++) {
      randomColors.push(colors[i]);
    }
    for (let i = 4; i < colors.length; i++) {
      randomColors.push(colors[i % 4]);
    }

    return randomColors;
  }
  const handleFinalResultClick = () => {
    window.location.href = `/final-result/${EventId}`;
  };

  const [feedback, setFeedback] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      saveFeedback();
    }
  };

  const saveFeedback = () => {
    console.log("Feedback saved:", feedback);
    setFeedback("");
  };

  const handleChange = (event) => {
    setFeedback(event.target.value);
  };
  const [projectId, setProjectId] = useState("");
  const [EventId, setEventId] = useState("");

  const criterias = ["UI/UX", "WebDeveloper", "AI", "Blockchain"];
  const skills = ["UI/UX", "WebDeveloper", "AI", "Blockchain"];
  const Links = ["gitub.com", "drive.com", "www.figma.com", "www.canva.com"];

  const [result, setResult] = useState("");
  const [result_ai, setResultAi] = useState("");

  useEffect(() => {
    main().then((res) => setResult(res));
  }, []);
  useEffect(() => {
    main_ai().then((res) => setResultAi(res));
  }, []);

  return (
    <div className="flex flex-col mt-6 overflow-y-scroll h-[98vh]">
      <div className="flex justify-around items-center">
        <div className="rounded-full bg-white p-4">
          <IoMdReturnLeft
            size={35}
            onClick={goBack}
            style={{ cursor: "pointer" }}
          />
        </div>
        <h1 className="text-6xl font-[900] font-league-spartan">
          Team's Profile
        </h1>
        <Link
          to="/final-result/:id"
          className="text-gray-400"
          onClick={handleFinalResultClick}
        >
          See final result
        </Link>
      </div>
      <div>
        <div className="flex items-center justify-around mt-10">
          <div className="flex items-center w-[39%]">
            <img src={teamPic} alt="" />
            <div className="pl-10">
              <h1 className="text-3xl font-bold font-league-spartan">
                TEAM NAME
              </h1>
              <p className="text-gray-400 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique ad architecto unde harum fugit
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {skills.map((item, index) => {
              const randomColor = getRandomColors();
              return (
                <button
                  key={index}
                  className=" px-3 py-3 rounded-full"
                  style={{ backgroundColor: randomColor[index] }}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {!isAdmin && !isJudge && !isParticipant && (
        <div className="flex">
          <div className="flex flex-col mt-10 w-[62%] items-center">
            <div>
              <h1 className="text-3xl font-bold">Check Out those Links :</h1>
              <ul className="flex flex-col justify-start list-disc ml-10">
                {Links.map((items, index) => (
                  <li className="text-blue-500 justify-start underline">
                    <a href="">{items}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col mt-10 w-[62%] items-center">
              <h1 className="text-3xl font-bold">Check Out those Links :</h1>
              <div className="flex mt-4  w-[55%]">
                {criterias.map((cri, index) => (
                  <div className="px-4 mx-2 w-full py-2 bg-opacity-62 bg-gray-200  rounded-2xl">
                    <h1 className="text-[20px] font-bold">
                      <a href="">{cri}</a>
                    </h1>
                    <span className="text-gray-500">2/3</span>
                  </div>
                ))}
                <button className="px-4 mx-2 py-2 bg-opacity-62 bg-gray-200 items-center flex flex-col   rounded-2xl">
                  <IoAddCircleOutline size={20} />
                  <span className="text-gray-500 text-[10px] ">
                    Add Criteria
                  </span>
                </button>
              </div>
            </div>
            <div className="flex justify-start ml-64 w-[61%] mt-8 mb-6">
              <textarea
                placeholder="Feed Back"
                className="bg-opacity-62 mt-4 bg-gray-200 w-full rounded-2xl h-[120px] outline-none resize-none p-4"
                value={feedback}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
         
        </div>
      )}


{isJudge && (
        <div className="flex">
          <div className="flex flex-col mt-10 w-[62%] items-center">
            <div>
              <h1 className="text-3xl font-bold">Check Out those Links :</h1>
              <ul className="flex flex-col justify-start list-disc ml-10">
                {Links.map((items, index) => (
                  <li className="text-blue-500 justify-start underline">
                    <a href="">{items}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col mt-10 w-[62%] items-center">
              <h1 className="text-3xl font-bold">Check Out those Links :</h1>
              <div className="flex mt-4  w-[55%]">
                {criterias.map((cri, index) => (
                  <div className="px-4 mx-2 w-full py-2 bg-opacity-62 bg-gray-200  rounded-2xl">
                    <h1 className="text-[20px] font-bold">
                      <a href="">{cri}</a>
                    </h1>
                    <span className="text-gray-500">2/3</span>
                  </div>
                ))}
                <button className="px-4 mx-2 py-2 bg-opacity-62 bg-gray-200 items-center flex flex-col   rounded-2xl">
                  <IoAddCircleOutline size={20} />
                  <span className="text-gray-500 text-[10px] ">
                    Add Criteria
                  </span>
                </button>
              </div>
            </div>
            <div className="flex justify-start ml-64 w-[61%] mt-8 mb-6">
              <textarea
                placeholder="Feed Back"
                className="bg-opacity-62 mt-4 bg-gray-200 w-full rounded-2xl h-[120px] outline-none resize-none p-4"
                value={feedback}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
          <div className="  border rounded-lg h-[90%] bg-customLightBlue  p-4 w-[25%] ml-10 mt-6 focus:ring-2 focus:ring-blue-500 ">
            <img src={ai} alt="" />
            <div className="w-full h-[80%] outline-none resize-none  bg-customLightBlue  p-4 focus:outline-none ">
              {result_ai}
              {console.log(result)}
            </div>
          </div>
        </div>
      )}

      {(isParticipant || isAdmin ) && (
        <div className="flex">
          <div className="flex flex-col mt-10 w-[99%] ml-32 items-center">
            <div className="flex flex-col mt-10 w-full ml-96">
              <h1 className="text-3xl items-start font-bold">Submit your challenge :</h1>
              <div className="flex flex-col mt-4  w-[55%]">
                <input className="border-2 border-customBlue outline-none rounded-2xl bg-customLightBlue w-full px-4 py-4 rou" type="text" placeholder="Link"/>
                <a href="" className="text-customBlue m-2 underline">Add Link</a>
            </div>
            <div className="flex flex-col w-[61%] mt-8 mb-6">
            <img src={ai} className="w-28" alt="" />
            <div className="w-full h-[80%] rounded-2xl outline-none resize-none  bg-customLightBlue  p-4 focus:outline-none ">
              {result}
              {console.log(result)}
            </div>
            </div>
          </div>
          
        </div>
        </div>
      )}
    </div>
  );
}

export default ProfileProject;
