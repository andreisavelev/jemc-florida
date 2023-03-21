import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack";
import { ContentHeader } from "@jemc-florida/shared";
import Map from './map/map';

export function ContactsSection() {

  return (
    <Container className="jemc-mb-section">
      <Row>
        <Col md={6} sm={12} className="mb-4">
          <ContentHeader level="h3" text="Наш адрес" />
          <p>Florida, North Port</p>
          <Map />
        </Col>

        <Col md={6} sm={12}>
          <ContentHeader level="h3" text="Напишите нам" />
          <p>Мы будем рады ответить на ваши вопросы</p>
          <Form>
            <Stack gap={3}>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Имя</Form.Label>
                <Form.Control type="text" placeholder="Представьтесь, пожалуйста" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Электронная почта</Form.Label>
                <Form.Control type="email" placeholder="youremail@mail.com" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Сообщение</Form.Label>
                <textarea className="w-100 h-100 form-control" rows={8} placeholder="Ваше сообщение..." />
              </Form.Group>
            </Stack>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactsSection;
