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

  /**
   nav 부분 div로 변경 예정
   굳이 Link 사용 할 필요가 없을 듯
   div span으로 처리
  */

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
      {/*     
      <NavUl>
        <NavLi
          onClick={() => {
            props.setNav(1);
          }}
        >
          <Link to="#">선상</Link>
        </NavLi>
        <NavLi
          onClick={() => {
            props.setNav(2);
          }}
        >
          <Link to="#">도보</Link>
        </NavLi>
        <NavLi
          onClick={() => {
            props.setNav(3);
          }}
        >
          <Link to="#">기타</Link>
        </NavLi>
      </NavUl> */}

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
