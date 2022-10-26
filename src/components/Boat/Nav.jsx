import { Link } from "react-router-dom";
import { Select, NavItem, NavUl, NavLi, activeStyle } from "../style/BoatStyle";

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
      <div
        style={{
          display: "flex",
          fontSize: "1.6rem",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div>
          <NavItem
            onClick={() => {
              props.setNav(1);
            }}
          >
            선상
          </NavItem>
        </div>
        <div>
          <NavItem
            onClick={() => {
              props.setNav(2);
            }}
          >
            도보
          </NavItem>
        </div>
        <div>
          <NavItem
            onClick={() => {
              props.setNav(3);
            }}
          >
            기타
          </NavItem>
        </div>
      </div>
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
