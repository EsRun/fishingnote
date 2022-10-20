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

  const onToggle = (e) => {};

  return (
    <>
      <NavUl>
        <NavLi
          onClick={() => {
            props.setNav(1);
          }}
        >
          <Link to="#">Boat</Link>
        </NavLi>
        <NavLi
          onClick={() => {
            props.setNav(2);
          }}
        >
          <Link to="#">Land</Link>
        </NavLi>
        <NavLi
          onClick={() => {
            props.setNav(3);
          }}
        >
          <Link to="#">Other</Link>
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
