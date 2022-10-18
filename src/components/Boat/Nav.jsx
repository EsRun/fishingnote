import { Link } from "react-router-dom";
import { Select, NavUl, NavLi, activeStyle } from "../style/BoatStyle";

export default function Nav(props) {
  const locations = [
    { value: "1", name: "진해" },
    { value: "2", name: "삼천포" },
    { value: "3", name: "여수" },
  ];

  const onSelect = (e) => {
    props.setLocation(e.target.value);
  };

  return (
    <>
      <NavUl>
        <NavLi>
          <Link to="#" onClick={() => props.setNav(1)}>
            Boat
          </Link>
        </NavLi>
        <NavLi>
          <Link to="#" onClick={() => props.setNav(2)}>
            Land
          </Link>
        </NavLi>
        <NavLi>
          <Link to="#" onClick={() => props.setNav(3)}>
            Other
          </Link>
        </NavLi>
      </NavUl>
      <Select onChange={onSelect}>
        {locations.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Select>
    </>
  );
}
