import { Outlet } from "react-router-dom";
import { Header } from "./index";

export default function Layout() {
  return (
    <>
      <Header />
      <main style={{ marginTop: "100px" }}>
        <Outlet />
      </main>
    </>
  );
}
