import { Outlet } from "react-router-dom";
import { Main } from "../components/style/Common";
import { Header } from "./index";

export default function Layout() {
  // 인덱스 페이지 기획 고민...
  // 이달의 어종? 뭐 이런거?
  // 뭐 하지?

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
