import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  const BoxStyle = {
    padding: "10px 30px",
    border: "2px solid #ccc",
    "border-radius": "5px",
  };

  const Ul = styled.ul`
    display: flex;
    justify-content: flex-start;
    font-size: 1.8rem;
  `;

  const Li = styled.li`
    // width: ${(props) => props.width};
    padding: 10px 20px;

    &:hover {
      border-bottom: 5px solid skyblue;
      a {
        color: #1e9eff;
      }
    }

    &:not(:last-child) {
      margin-right: 50px;
    }
  `;

  const Select = styled.select`
    ${BoxStyle}
    font-size: 1.6rem;
  `;

  const locations = [
    { value: "1", name: "진해" },
    { value: "2", name: "삼천포" },
    { value: "3", name: "여수" },
  ];
  return (
    <>
      <Ul>
        <Li>
          <Link to="#">선택1</Link>
        </Li>
        <Li>
          <Link to="#">선택2</Link>
        </Li>
        <Li>
          <Link to="#">선택3</Link>
        </Li>
      </Ul>
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