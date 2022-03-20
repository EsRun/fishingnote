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
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
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
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
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
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default Content_Card;
