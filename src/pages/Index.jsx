import { Container, Row } from "../components/style/Common";

export default function Index() {
  /* 
  인덱스 컨텐츠
  이달의 어종, 어종별 채비 종류 등
  이미지? 텍스트?
  */
  return (
    <Container style={{}}>
      <div style={{ display: "flex", flexFlow: "column" }}>
        <Row style={{ textAlign: "-webkit-right", marginBottom: "40px" }}>
          <div
            style={{
              padding: "20px",
              width: "80%",
              height: "700px",
              border: "1px solid skyblue",
            }}
          >
            <div
              style={{
                height: "100%",
                backgroundColor: "#abedab",
              }}
            ></div>
          </div>
        </Row>
        <Row>
          <div
            style={{
              width: "80%",
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
      </div>
    </Container>
  );
}
