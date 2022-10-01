import { MiddleBox, Ul, Li } from "../style/BoatStyle";

export default function MiddleContent() {
  const contentData = [
    { month: "2", species: ["종류1", "종류2", "종류3"], scale: "1, 2, 3" },
    { month: "3", species: ["종류1", "종류2", "종류3"], scale: "3, 4, 5" },
    { month: "1", species: ["종류1", "종류2", "종류3"], scale: "6, 7, 8" },
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

  const selectMonth = (e) => {
    console.log(e);
    e.currentTarget.style.border = "1px solid #ff0000";
  };

  return (
    <>
      <MiddleBox>
        <Ul>
          {contentData.map((value, index) => (
            <Li key={index} onClick={selectMonth}>
              <div
                style={{
                  paddingBottom: "5px",
                  borderBottom: "3px solid #fff",
                }}
              >
                <span key={index}>{value.month}월</span>
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
                <span>물 : </span>
                <span>{value.scale}</span>
              </div>
            </Li>
          ))}
        </Ul>
      </MiddleBox>
    </>
  );
}
