import { Container, Row } from "../components/style/Common";
//import "../resources/css/Board.css";

export default function Board() {
  return (
    <Container>
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
        </ul>
      </Row>
      <Row>
        <div class="my-4 flex justify-center border-t border-gray-500/30 dark:border-gray-500/70">
          <nav
            class="relative z-0 inline-flex w-full justify-center"
            aria-label="Pagination"
          >
            <button class="cursor-default text-gray-300 dark:text-gray-700 relative mr-auto inline-flex items-center pt-4 text-sm font-medium">
              <span class="sr-only">Previous</span>
              <div class="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  ></path>
                </svg>
                <span>Previous</span>
              </div>
            </button>
            <button class="z-10 border-t-2 border-blue-500 text-blue-500 relative hidden sm:inline-flex items-center px-2 sm:px-4 pt-4 text-sm font-medium">
              1
            </button>
            <button class="border-gray-500/30 dark:border-gray-500/70 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-200 mt-0.5 relative hidden sm:inline-flex items-center px-2 sm:px-4 pt-4 text-sm font-medium">
              2
            </button>
            <button class="border-gray-500/30 dark:border-gray-500/70 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-200 mt-0.5 relative hidden sm:inline-flex items-center px-2 sm:px-4 pt-4 text-sm font-medium">
              3
            </button>
            <button class="border-gray-500/30 dark:border-gray-500/70 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-200 mt-0.5 relative hidden sm:inline-flex items-center px-2 sm:px-4 pt-4 text-sm font-medium">
              4
            </button>
            <button class="border-gray-500/30 dark:border-gray-500/70 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-200 mt-0.5 relative hidden sm:inline-flex items-center px-2 sm:px-4 pt-4 text-sm font-medium">
              5
            </button>
            <button class="relative hidden items-end px-2 pt-4 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-200 sm:inline-flex sm:px-3">
              <span class="sr-only">4</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="h-3 w-3 opacity-80"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                ></path>
              </svg>
            </button>
            <button class="border-gray-500/30 dark:border-gray-500/70 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-200 mt-0.5 relative hidden sm:inline-flex items-center px-2 sm:px-4 pt-4 text-sm font-medium">
              6380
            </button>
            <button class="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-200 relative ml-auto inline-flex items-center pt-4 text-sm font-medium">
              <span class="sr-only">Next</span>
              <div class="flex items-center space-x-3">
                <span>Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </div>
            </button>
          </nav>
        </div>
      </Row>
    </Container>
  );
}
