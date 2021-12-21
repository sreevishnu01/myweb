import React from 'react'
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap'

function SkillCard() {
    return (
        <>
            <Container className="pe-5 me-5">
                <Card border="primary" bg='danger' style={{ height: '20rem' }} className="detail">
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <p>JavaScript</p>
                        <ProgressBar animated variant="primary" now={90} />
                        <p>Python</p>
                        <ProgressBar animated variant="success" now={70} />
                        <p>React</p>
                        <ProgressBar animated variant="light" now={60} />
                        <p>Node</p>
                        <ProgressBar animated variant="light" now={50} />
                    </Card.Body>
                </Card>
            </Container>

        </>

    )
}

export default SkillCard
