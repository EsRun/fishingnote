import { Link } from "react-router-dom";
import {
  Select,
  NavBox,
  NavItem,
  NavUl,
  NavLi,
  activeStyle,
} from "../style/BoatStyle";

export default function Nav(props) {
  const locations = [
    { value: "1", name: "진해" },
    { value: "2", name: "삼천포" },
    { value: "3", name: "여수" },
  ];

  const methods = [
    { value: "1", name: "선상" },
    { value: "2", name: "도보" },
    { value: "3", name: "기타" },
  ];

  const onSelect = (e) => {
    props.setLocation(e.target.value);
  };

  const onToggle = (e) => {};

  return (
    <>
      <NavBox>
        {methods.map((value, index) => (
          <div key={index}>
            <NavItem
              key={index}
              onClick={() => {
                props.setNav(index);
              }}
            >
              {value.name}
            </NavItem>
          </div>
        ))}
        {/*         
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
        </div> */}
      </NavBox>
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
