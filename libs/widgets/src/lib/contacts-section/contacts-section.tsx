import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack";
import { ContentHeader } from "@jemc-florida/shared";
import Map from './map/map';
import Button from "react-bootstrap/Button";

export function ContactsSection() {

  return (
    <Container className="jemc-mb-section" id="contacts">
      <Row>
        <Col md={6} sm={12} className="mb-4">
          <ContentHeader level="h3" text="Наш адрес" />
          <p>1101 S Tamiami Trl suite 112, Venice, FL 34285</p>
          <Map />
        </Col>

        <Col md={6} sm={12}>
          <ContentHeader level="h3" text="Напишите нам" />
          <p>Мы будем рады ответить на ваши вопросы</p>
          <Form>
            <Stack gap={3}>
              <Form.Group controlId="formBasicPassword">
                <Form.Label className="visually-hidden">Имя</Form.Label>
                <Form.Control type="text" placeholder="Представьтесь, пожалуйста" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label className="visually-hidden">Электронная почта</Form.Label>
                <Form.Control type="email" placeholder="Электронная почта" />
                <p className="fw-lighter lh-1 text-muted">
                  Мы никогда и ни кому не передадим адрес вашей электронной почты
                </p>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label className="visually-hidden">Сообщение</Form.Label>
                <textarea className="w-100 h-100 form-control" rows={6} placeholder="Ваше сообщение..." />
              </Form.Group>
              <Button
                type="submit"
                variant="primary"
              >
                Отправить
              </Button>
            </Stack>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactsSection;
