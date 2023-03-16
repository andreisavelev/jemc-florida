import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { ContentHeader } from "@jemc-florida/shared";
import SloganCard from "../slogan-card/slogan-card";

export function Slogans() {
  return (
    <Container>
      <Row className="mb-4">
        <Col classNmae="justify-content-center">
          <figure className="text-center">
            <blockquote className="blockquote">
              <p>I will build My church, and the gates of Hades will not prevail against it.</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              <cite title="Matthew 16:18">Matthew 16:18</cite>
            </figcaption>
          </figure>

          <section>
            <ContentHeader
              level="h2"
              text="A Church That's Relevant"
              className="text-center"
            />
          </section>
        </Col>
      </Row>

      <Row>
        <Col sm={12} lg={4} xl={4}>
          <SloganCard
            title="Our Mission"
            imageLink="/images/Praise_Icon.svg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </Col>
        <Col sm={12} lg={4} xl={4}>
          <SloganCard
            title="Our Goals"
            imageLink="/images/Sound_Icon.svg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </Col>
        <Col sm={12} lg={4} xl={4}>
          <SloganCard
            title="Our Vision"
            imageLink="/images/Ministry_of_love_Icon.svg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </Col>
      </Row>
    </Container>
  );
}

export default Slogans;
