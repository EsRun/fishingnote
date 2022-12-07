import { Container, Row } from "../components/style/Common";
import { MainBox, MainRow, ContentTitle } from "../components/style/MainStyle";
import flatFish from "../resources/images/flatFish.jpg";

export default function Index() {
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
                  border: "1px solid gray",
                  height: "535px",
                  fontSize: "1.8rem",
                  backgroundImage: `url(${flatFish})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right",
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
