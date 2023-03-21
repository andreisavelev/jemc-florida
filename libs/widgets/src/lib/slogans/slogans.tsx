import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import { ContentHeader } from "@jemc-florida/shared";
import SloganCard from "../slogan-card/slogan-card";

export function Slogans() {
  return (
    <Container className="jemc-mb-section" id="slogans">
      <Row className="mb-4">
        <Col classNmae="justify-content-center">
          <figure className="text-center">
            <blockquote className="blockquote">
              <p>«Бог хочет, чтобы все люди спаслись и достигли познания истины»</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              <cite title="1-е Тимофею 2:4">1-е Тимофею 2:4</cite>
            </figcaption>
          </figure>

          <section>
            <ContentHeader
              level="h2"
              text="Наше видение, ценности и цели"
              className="text-center"
            />
          </section>
        </Col>
      </Row>

      <Row className="justify-content-between">
        <Col sm={12} lg={5} xl={5}>
          <SloganCard
            title="Наше видение"
            variant="1"
          >
            <p>
              Видение и стратегия как у Иисуса. Он хотел спасти мир и поэтому ИЗБИРАЛ, УКОРЕНЯЛ, ОБУЧАЛ И ВЫСЫЛАЛ своих 12 учеников.
            </p>
          </SloganCard>
        </Col>
        <Col sm={12} lg={5} xl={5}>
          <SloganCard
            title="Наши ценности"
            variant="2"
          >
            <ul>
              <li>Команда 12</li>
              <li>Евангелизация</li>
              <li>Ячейки (семейные, мужские, женские, подростковые)</li>
              <li>Личные отношения с Богом</li>
              <li>Пенуэл (встреча с Богом)</li>
              <li>Ходатайственная молитва</li>
              <li>Обучение лидерств</li>
            </ul>
          </SloganCard>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={12} xl={12}>
          <SloganCard
            title="Наша Миссия"
            variant="3"
          >
            <p>
              <b>Наша любовь к Богу</b> заключается в том, что <b>мы делаем всё</b>,
              чтобы каждый человек был <b>спасён</b>,&nbsp;
              <b>исцелён</b>, <b>восстановлен</b>, и <b>благословлен</b> на дело Евангелия!
            </p>
          </SloganCard>
        </Col>
      </Row>
    </Container>
  );
}

export default Slogans;
