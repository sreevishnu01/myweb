import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

function Contact() {
    return (
        <div>
            <Form>
                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Control type="Name" placeholder="Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                </Row>
                <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder='massage' rows={3} />
                </Form.Group>
            </Form>

        </div>
    )
}

export default Contact
