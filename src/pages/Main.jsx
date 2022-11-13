import { Container, Row } from "../components/style/Common";
import { MainBox, MainRow, ContentTitle } from "../components/style/MainStyle";

export default function Index() {
  /* 
  인덱스 컨텐츠
  이달의 어종, 어종별 채비 종류 등
  이미지? 텍스트?
  컨텐츠 박스 안 구조 어떻게?
  */
  return (
    <Container>
      <MainBox>
        <Row style={{ marginBottom: "40px" }}>
          <div
            style={{
              padding: "25px",
              width: "100%",
              height: "700px",
              border: "1px solid skyblue",
              textAlign: "left",
            }}
          >
            <MainRow>
              <ContentTitle>
                <span>타이틀</span>
              </ContentTitle>
            </MainRow>
            <MainRow>
              <div
                style={{
                  border: "1px solid green",
                  height: "535px",
                  fontSize: "1.6rem",
                }}
              >
                Content
              </div>
            </MainRow>
          </div>
        </Row>
        <Row>
          <div
            style={{
              width: "100%",
              padding: "20px",
              height: "700px",
              border: "1px solid skyblue",
            }}
          >
            <div
              style={{
                height: "100%",
                backgroundColor: "#abeaed",
              }}
            ></div>
          </div>
        </Row>
      </MainBox>
    </Container>
  );
}
