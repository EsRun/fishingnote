import { Container, Row } from "../components/style/Common";

export default function Index() {
  return (
    <Container>
      <div style={{ display: "flex", flexFlow: "column" }}>
        <Row style={{ textAlign: "-webkit-right", marginBottom: "40px" }}>
          <div
            style={{
              padding: "20px",
              width: "80%",
              height: "500px",
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
              height: "500px",
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
