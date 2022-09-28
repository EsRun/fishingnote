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
    background-color: #54b1e7;
    border-radius: 5px;
    color: #fff;
  `;

  const contentData = [
    { month: "1", species: "종류1, 종류2, 종류3" },
    { month: "2", species: "종류1, 종류2, 종류3" },
    { month: "3", species: "종류1, 종류2, 종류3" },
    { month: "4", species: "종류1, 종류2, 종류3" },
    { month: "5", species: "종류1, 종류2, 종류3" },
    { month: "6", species: "종류1, 종류2, 종류3" },
    { month: "7", species: "종류1, 종류2, 종류3" },
    { month: "8", species: "종류1, 종류2, 종류3" },
    { month: "9", species: "종류1, 종류2, 종류3" },
    { month: "10", species: "종류1, 종류2, 종류3" },
    { month: "11", species: "종류1, 종류2, 종류3" },
    { month: "12", species: "종류1, 종류2, 종류3" },
  ];

  return (
    <>
      <MiddleBox>
        <Ul>
          {contentData.map((value, index) => (
            <Li key={index}>
              <div
                style={{
                  "padding-bottom": "5px",
                  "border-bottom": "1px solid #fff",
                }}
              >
                {value.month}
              </div>
              <div
                style={{
                  "margin-top": "20px",
                  height: "80%",
                  "background-color": "#fff",
                  "border-radius": "5px",
                  color: "#000",
                }}
              >
                ㅇㅇ
              </div>
            </Li>
          ))}
        </Ul>
      </MiddleBox>
    </>
  );
}
