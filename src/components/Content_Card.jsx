import { CardGroup, Card } from "react-bootstrap";
import "./../resources/css/Content_Card.css";

const Content_Card = () => {
  return (
    <CardGroup>
      <Card className="card">
        <Card.Img
          variant="left"
          src="https://www.10wallpaper.com/wallpaper/1366x768/1606/Summer_tropical_beach-Ocean_scenery_HD_wallpaper_1366x768.jpg"
        />
        <Card.Body>
          <Card.Title>무늬오징어</Card.Title>
          <Card.Text>- 7월말 ~ 10월초</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://www.10wallpaper.com/wallpaper/1366x768/1606/Summer_tropical_beach-Ocean_scenery_HD_wallpaper_1366x768.jpg"
        />
        <Card.Body>
          <Card.Title>갑오징어</Card.Title>
          <Card.Text>- 산란갑이 4월초 ~ 5월말</Card.Text>
          <Card.Text>- 일반 9월초 ~ 10월말</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://www.10wallpaper.com/wallpaper/1366x768/1606/Summer_tropical_beach-Ocean_scenery_HD_wallpaper_1366x768.jpg"
        />
        <Card.Body>
          <Card.Title>한치</Card.Title>
          <Card.Text>- 5월초 ~ 7월초</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default Content_Card;
