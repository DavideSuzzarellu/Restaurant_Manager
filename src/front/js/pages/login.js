import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Col, Button, Row, Card } from "react-bootstrap";

export const Login1 = () => {
	return (
		<Container bg={"Light"} text={"dark"} style={{ width: "20rem" }} className="mb-5">
			<Col>
				<h1 text="white">Bienvebidos</h1>
				<Form bg="white">
					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Col sm={10}>
							<Form.Control type="email" placeholder="Correo Electronico" />
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formHorizontalPassword">
						<Col sm={10}>
							<Form.Control type="password" placeholder="Contraseña" />
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="formHorizontalCheck">
						<Col sm={{ span: 10, offset: 2 }}>
							<Form.Check label="Recuerdarme" />
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Col sm={{ span: 10, offset: 2 }}>
							<Button type="submit" size="lg">
								Ingresar
							</Button>
						</Col>
					</Form.Group>

					<Form.Group as={Row}>
						<Col sm={{ span: 10, offset: 2 }}>
							<Button type="submit" variant="outline-danger" size="lg">
								Google
							</Button>
						</Col>
						<Col sm={{ span: 10, offset: 2 }}>
							<Button type="submit" variant="outline-primary" size="lg">
								Facebook
							</Button>
						</Col>
					</Form.Group>
				</Form>
			</Col>
		</Container>
	);
};
