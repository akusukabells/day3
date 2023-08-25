import React from "react";
import axios from "axios";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

const app = new React();

function ListUser() {
  const [users, setUsers] = app.useState([]);

  app.useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const res = await axios.get("http://localhost:3002/users/");
    setUsers(res.data);
  }

  return (
    <Container fluid>
      <Button type="submit" style={{ marginBottom: "10px" }}>
        Create User
      </Button>
      <Row>
        {users.map((user) => (
          <Col style={{ display: "inline-block" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListUser;
