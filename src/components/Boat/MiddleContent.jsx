import styled from "styled-components";

export default function MiddleContent() {
  const MiddleBox = styled.div`
    display: flex;
    margin-bottom: 20px;
  `;

  const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    font-size: 1.8rem;
  `;

  const Li = styled.li`
    margin-bottom: 20px;
    padding: 30px;
    width: 265px;
    height: 320px;
    background-color: #77c7f5;
    border-radius: 5px;
    color: #fff;
  `;

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

  return (
    <>
      <MiddleBox>
        <Ul>
          {contentData.map((value, index) => (
            <Li key={index}>
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
                  color: "#000",
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
                  color: "#000",
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
