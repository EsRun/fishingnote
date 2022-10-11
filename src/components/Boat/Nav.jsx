import { NavLink } from "react-router-dom";
import { Select, NavUl, NavLi, activeStyle } from "../style/BoatStyle";

export default function Nav() {
  const locations = [
    { value: "1", name: "진해" },
    { value: "2", name: "삼천포" },
    { value: "3", name: "여수" },
  ];
  return (
    <>
      <NavUl>
        <NavLi>
          <NavLink
            to="#"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            선택1
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink
            to="#"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            선택2
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink
            to="#"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            선택3
          </NavLink>
        </NavLi>
      </NavUl>
      <Select>
        {locations.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Select>
    </>
  );
}
