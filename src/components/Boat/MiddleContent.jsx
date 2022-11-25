import { useState, useCallback, useMemo, useEffect } from "react";
import {
  MiddleBox,
  Ul,
  Li,
  TitleLine,
  BoxLine,
  SelectItem,
} from "../style/BoatStyle";

export default function MiddleContent(props) {
  const [select, setSelect] = useState([]);
  const [activeClass, setActiveClass] = useState(0);

  const boatArray = [
    { month: "1", species: ["Boat1", "Boat2", "Boat3"], scale: "1, 2, 3" },
    { month: "2", species: ["Boat1", "Boat2", "Boat3"], scale: "3, 4, 5" },
    { month: "3", species: ["Boat1", "Boat2", "Boat3"], scale: "6, 7, 8" },
    {
      month: "4",
      species: ["Boat1", "Boat2", "Boat3"],
      scale: "10, 11, 12, 13",
    },
    { month: "5", species: ["Boat1", "Boat2", "Boat3"], scale: "1, 2" },
    { month: "6", species: ["Boat1", "Boat2", "Boat3"], scale: "13, 14, 15" },
    { month: "7", species: ["Boat1", "Boat2", "Boat3"], scale: "4, 5, 6" },
    { month: "8", species: ["Boat1", "Boat2", "Boat3"], scale: "3, 5, 7" },
    { month: "9", species: ["Boat1", "Boat2", "Boat3"], scale: "8, 9, 10" },
    { month: "10", species: ["Boat1", "Boat2", "Boat3"], scale: "3, 4" },
    { month: "11", species: ["Boat1", "Boat2", "Boat3"], scale: "1, 2" },
    {
      month: "12",
      species: ["Boat1", "Boat2", "Boat3"],
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

  const otherArray = [
    { month: "1", species: ["Other1", "Other2", "Other3"], scale: "1, 2, 3" },
    { month: "2", species: ["Other1", "Other2", "Other3"], scale: "3, 4, 5" },
    { month: "3", species: ["Other1", "Other2", "Other3"], scale: "6, 7, 8" },
    {
      month: "4",
      species: ["Other1", "Other2", "Other3"],
      scale: "10, 11, 12, 13",
    },
    { month: "5", species: ["Other1", "Other2", "Other3"], scale: "1, 2" },
    {
      month: "6",
      species: ["Other1", "Other2", "Other3"],
      scale: "13, 14, 15",
    },
    { month: "7", species: ["Other1", "Other2", "Other3"], scale: "4, 5, 6" },
    { month: "8", species: ["Other1", "Other2", "Other3"], scale: "3, 5, 7" },
    { month: "9", species: ["Other1", "Other2", "Other3"], scale: "8, 9, 10" },
    { month: "10", species: ["Other1", "Other2", "Other3"], scale: "3, 4" },
    { month: "11", species: ["Other1", "Other2", "Other3"], scale: "1, 2" },
    {
      month: "12",
      species: ["Other1", "Other2", "Other3"],
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
    console.log("props Nav= ", props.Nav);
    console.log("props location= ", props.Location);
    props.Nav === "1"
      ? setSelect(boatArray)
      : props.Nav === "2"
      ? setSelect(landArray)
      : props.Nav === "3"
      ? setSelect(otherArray)
      : setSelect(boatArray);

    setActiveClass(0);
  }, [props.Nav, props.Location]);

  const onSelect = (idx) => {
    setActiveClass(idx);
  };

  return (
    <>
      <MiddleBox>
        <Ul>
          {select.map((value, index) => (
            <Li
              key={index}
              onClick={() => onSelect(index)}
              style={activeClass === index ? SelectItem : null}
            >
              <TitleLine>
                <span key={index}>{index + 1}월</span>
              </TitleLine>
              <BoxLine>
                {value.species.map((el, idx) => (
                  <span key={idx}>- {el}</span>
                ))}
              </BoxLine>
              <div
                style={{
                  padding: "7px 10px",
                  border: "3px solid #ccc",
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
