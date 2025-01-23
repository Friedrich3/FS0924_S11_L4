import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Result } from "../types/Articles";
import Article from "./Article";
import { useNavigate } from "react-router-dom";

const ArticleList = function () {
  const [articles, setArticles] = useState<null | Result[]>(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async function () {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      if (response.ok) {
        const data = await response.json();
        setArticles(data.results);
      } else {
        throw new Error("Errore Fetch");
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
    } ${data.getFullYear()}`;
  };

  return (
    <main>
      {articles && (
        <>
          <Container>
            <Row
              onClick={() => {
                navigate(`/article/${articles[0].id}`);
              }}
            >
              <Col>
                <div>
                  <img
                    src={articles[0].image_url}
                    alt="Article Poster"
                    className="img-fluid border border-1 rounded-4"
                  />
                </div>
              </Col>
              <Col>
                <div className="h-100 d-flex flex-column">
                  <h2>{articles[0].title}</h2>
                  <small>{setNewDate(articles[0].published_at)}</small>
                  <br />
                  <cite>By: {articles[0].authors[0].name}</cite>
                  <p>{articles[0].summary}</p>
                  <small className=" mt-auto align-self-end">
                    Last Update: {setNewDate(articles[0].updated_at)}
                  </small>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="mt-3">
            <Row>
              <Col xs={9}>
                {articles.slice(1).map((element) => {
                  return <Article article={element} key={element.id} />;
                })}
              </Col>
              <Col xs={3} className="border border-1">
                <h4 className="text-center mt-2 fw-bold">ALSO TODAY:</h4>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </main>
  );
};

export default ArticleList;
