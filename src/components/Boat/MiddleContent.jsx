import { useState } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { MiddleBox, Ul, Li } from "../style/BoatStyle";

export default function MiddleContent(props) {
  const [select, setSelect] = useState([]);

  const boatArray = [
    { month: "1", species: ["종류1", "종류2", "종류3"], scale: "1, 2, 3" },
    { month: "2", species: ["종류1", "종류2", "종류3"], scale: "3, 4, 5" },
    { month: "3", species: ["종류1", "종류2", "종류3"], scale: "6, 7, 8" },
    {
      month: "4",
      species: ["종류1", "종류2", "종류3"],
      scale: "10, 11, 12, 13",
    },
    { month: "5", species: ["종류1", "종류2", "종류3"], scale: "1, 2" },
    { month: "6", species: ["종류1", "종류2", "종류3"], scale: "13, 14, 15" },
    { month: "7", species: ["종류1", "종류2", "종류3"], scale: "4, 5, 6" },
    { month: "8", species: ["종류1", "종류2", "종류3"], scale: "3, 5, 7" },
    { month: "9", species: ["종류1", "종류2", "종류3"], scale: "8, 9, 10" },
    { month: "10", species: ["종류1", "종류2", "종류3"], scale: "3, 4" },
    { month: "11", species: ["종류1", "종류2", "종류3"], scale: "1, 2" },
    {
      month: "12",
      species: ["종류1", "종류2", "종류3"],
      scale: "12, 13, 14, 15",
    },
  ];

  const landArray = [
    { month: "1", species: ["Land1", "Land2", "Land3"], scale: "1, 2, 3" },
    { month: "2", species: ["Land1", "Land2", "Land3"], scale: "3, 4, 5" },
    { month: "3", species: ["Land1", "Land2", "Land3"], scale: "6, 7, 8" },
    {
      month: "4",
      species: ["Land1", "Land2", "Land3"],
      scale: "10, 11, 12, 13",
    },
    { month: "5", species: ["Land1", "Land2", "Land3"], scale: "1, 2" },
    { month: "6", species: ["Land1", "Land2", "Land3"], scale: "13, 14, 15" },
    { month: "7", species: ["Land1", "Land2", "Land3"], scale: "4, 5, 6" },
    { month: "8", species: ["Land1", "Land2", "Land3"], scale: "3, 5, 7" },
    { month: "9", species: ["Land1", "Land2", "Land3"], scale: "8, 9, 10" },
    { month: "10", species: ["Land1", "Land2", "Land3"], scale: "3, 4" },
    { month: "11", species: ["Land1", "Land2", "Land3"], scale: "1, 2" },
    {
      month: "12",
      species: ["Land1", "Land2", "Land3"],
      scale: "12, 13, 14, 15",
    },
  ];
  /*
  const setFunc = useCallback(() => {
    props.Nav === 1 ? setSelect(boatArray) : setSelect(landArray);
  }, [props.Nav, boatArray, landArray]);

  const sets = useMemo(() => setFunc(props.Nav), [setFunc, props.Nav]);
*/
  useEffect(() => {
    console.log("pr", props.Nav);
  }, [props.Nav]);

  const selectMonth = (e) => {
    e.currentTarget.style.border = "1px solid #ff0000";
  };

  return (
    <>
      <MiddleBox>
        <Ul>
          {select.map((value, index) => (
            <Li key={index} onClick={selectMonth}>
              <div
                style={{
                  paddingBottom: "5px",
                  borderBottom: "3px solid #fff",
                }}
              >
                <span key={index}>{index + 1}월</span>
              </div>
              <div
                style={{
                  margin: "20px 0",
                  height: "60%",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                }}
              >
                {value.species.map((el, idx) => (
                  <span key={idx}>- {el}</span>
                ))}
              </div>
              <div
                style={{
                  padding: "7px 10px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                }}
              >
                <span>추천 - </span>
                <span>{value.scale}물</span>
              </div>
            </Li>
          ))}
        </Ul>
      </MiddleBox>
    </>
  );
}
