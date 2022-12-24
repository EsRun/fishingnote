import { Container, Row } from "../components/style/Common";

export default function Board() {
  const btn = {
    backgroundColor: "transparent",
    border: "0",
    padding: "20px",
    fontSize: "1.4rem",
    fontWeight: "500",
  };

  return (
    <Container>
      <Row>
        <div>searchBox</div>
      </Row>
      <Row>
        <ul>
          <li
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #ccc",
            }}
          >
            <div style={{ fontSize: "14px" }}>Logo / Id / 155 / 3분 전</div>
            <div
              style={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                fontSize: "1.6rem",
                fontWeight: "bold",
              }}
            >
              <a>생능출판사 [비전공이지만 개발자로 먹고삽니다] 리뷰 이벤트</a>
            </div>
            <div style={{ fontSize: "12px" }}>Tag 사는 얘기</div>
          </li>
          <li
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #ccc",
            }}
          >
            <div style={{ fontSize: "14px" }}>Logo / Id / 155 / 3분 전</div>
            <div
              style={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                fontSize: "1.6rem",
                fontWeight: "bold",
              }}
            >
              <a>생능출판사 [비전공이지만 개발자로 먹고삽니다] 리뷰 이벤트</a>
            </div>
            <div style={{ fontSize: "12px" }}>Tag 사는 얘기</div>
          </li>
          <li
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #ccc",
            }}
          >
            <div style={{ fontSize: "14px" }}>Logo / Id / 155 / 3분 전</div>
            <div
              style={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                fontSize: "1.6rem",
                fontWeight: "bold",
              }}
            >
              <a>생능출판사 [비전공이지만 개발자로 먹고삽니다] 리뷰 이벤트</a>
            </div>
            <div style={{ fontSize: "12px" }}>Tag 사는 얘기</div>
          </li>
        </ul>
      </Row>
      <Row>
        <div>
          <nav
            aria-label="Pagination"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button style={btn}>
              <span>Previous</span>
            </button>
            <div>
              <button style={btn}>1</button>
              <button style={btn}>2</button>
              <button style={btn}>3</button>
              <button style={btn}>4</button>
              <button style={btn}>5</button>
            </div>
            <button style={btn}>
              <span>Next</span>
            </button>
          </nav>
        </div>
      </Row>
      <Row></Row>
    </Container>
  );
}
