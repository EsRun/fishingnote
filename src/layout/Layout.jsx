import { Outlet } from "react-router-dom";
import { Header } from "./index";

export default function Layout() {
  // 인덱스 페이지 기획 고민...

  return (
    <>
      <Header />
      <main style={{ marginTop: "100px" }}>
        <Outlet />
      </main>
    </>
  );
}
