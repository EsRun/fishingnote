import { Link } from "react-router-dom";
import { Select, NavUl, NavLi } from "../style/BoatStyle";

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
          <Link to="#">선택1</Link>
        </NavLi>
        <NavLi>
          <Link to="#">선택2</Link>
        </NavLi>
        <NavLi>
          <Link to="#">선택3</Link>
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
