import { Card, Col, Row } from "react-bootstrap";
import { Result } from "../types/Articles";
import { useNavigate } from "react-router-dom";

interface Article {
  article : Result
}


const Article = function (props: Article) {

  const navigate = useNavigate()


  const setNewDate = (element: Result['published_at']) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    const  data = new Date(element)
    return `${daysOfWeek[data.getDay()]} ${data.getDate()} ${months[data.getMonth()]} ${data.getFullYear()}`
}

  return (
    <>
      <Card className="mb-3" onClick={()=>{navigate(`/article/${props.article.id}`)}} >
        <Row className="no-gutters">
          <Col md={4}>
            <Card.Img src={props.article.image_url}  alt="ArticlePoster" />
          </Col>
          <Col md={8}>
            <Card.Body className="d-flex flex-column h-100">
              <Card.Title>{props.article.title}</Card.Title>
              <Card.Text>
                {props.article.summary}
              </Card.Text>
              <Card.Text className="mt-auto">
                <small className="text-muted">Published: {setNewDate(props.article.published_at)}</small>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Article;
