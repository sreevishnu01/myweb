import React, { useState } from 'react'
import { Form, Row, Col, Button, Spinner, Toast, ToastContainer } from 'react-bootstrap'
import axios from 'axios'

function Contact() {
    // forem details
    const initialvalues = { name: "", email: "", subject: "", text: "" }
    const [formvalues, setFormvalues] = useState(initialvalues)

    // // axios details
    const [isloding, setIsloading] = useState(false)
    const [sucssus, setSucssus] = useState(false)

    const handelChange = (e) => {
        const { name, value } = e.target
        setFormvalues({ ...formvalues, [name]: value })
    }

    const handelSubmit = async (e) => {
        e.preventDefault();
        setIsloading(true)
        try {
            await axios.post(process.env.REACT_APP_API + '/contact', formvalues
            );
            setSucssus(true)
        } catch (error) {
            alert('pleace try again later. server is down!!', error)
        } finally {
            setIsloading(false)
        }

    }

    return (
        <div>
            <Form onSubmit={handelSubmit}>
                <Row className="mb-3">

                    <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Control required type="Name" placeholder="Name" name='name' value={formvalues.name} onChange={handelChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formBasicEmail">
                        <Form.Control required type="email" placeholder="Enter email" name='email' value={formvalues.email} onChange={handelChange} />
                    </Form.Group>

                </Row>
                <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control required type="text" placeholder="subject" name='subject' value={formvalues.subject} onChange={handelChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control required as="textarea" placeholder='massage' name='text' rows={3} value={formvalues.text} onChange={handelChange} />
                </Form.Group>
                <Button type="submit">submit</Button>
            </Form>

            {isloding ? (

                <div className='center'>
                    <Spinner animation="border" variant="primary" />
                </div>
            ) : (
                <>
                </>
            )}
            <div>
                <ToastContainer position="bottom-end" className="p-3">
                    <Toast bg='primary' onClose={() => setSucssus(false)} show={sucssus} delay={3000} autohide>
                        <Toast.Body className='text-white'>Massage sent!</Toast.Body>
                    </Toast>

                </ToastContainer>
            </div>
        </div >
    )
}

export default Contact
