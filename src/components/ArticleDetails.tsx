import { useEffect, useState } from "react";
import { Result } from "../types/Articles";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ArticleDetail = function () {
  const params = useParams();

  const [article, setArticle] = useState<null | Result>(null);

  useEffect(() => {
    fetchArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchArticle = async function () {
    const url = `https://api.spaceflightnewsapi.net/v4/articles/${params.id}`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setArticle(data);
      } else {
        throw new Error("Errore Fetch Articolo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setNewDate = (element: Result["published_at"]) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const data = new Date(element);
    return `${daysOfWeek[data.getDay()]} ${data.getDate()} ${
      months[data.getMonth()]
    } ${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}`;
  };

  return (
    <main>
      {article && (
        <Container>
          <Row xs={12} md={8} className=" justify-content-center">
            <Col>
              <h1 className="text-center">{article.title}</h1>
              <div>
                <img src={article.image_url} alt="Article Picture" className="img-fluid"/>
              </div>
              <div className="d-flex justify-content-between">
                <small>{setNewDate(article.published_at)}</small>
                <small>Author: <cite>{article.authors[0].name}</cite></small>
                <small >Last Update: {setNewDate(article.updated_at)}</small>
              </div>
              <div className="mt-5">
                <h6>In this Article...</h6>
                <p>
                  {article.summary}
                </p>
                <a href={article.url} target="blank">ClickHere! To See More About this Article.</a>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </main>
  );
};

export default ArticleDetail;
