import { Outlet } from "react-router-dom";
import { Main } from "../components/style/Common";
import { Header } from "./index";

export default function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
