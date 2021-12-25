import React from 'react'
import { Container, Card, ProgressBar } from 'react-bootstrap'

function SkillCard() {
    return (
        <>
            <Container>
                <Card border="primary" bg='danger' style={{ height: '20rem' }} className="detail">
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <p>JavaScript</p>
                        <ProgressBar animated variant="warning" now={90} />
                        <p>Python</p>
                        <ProgressBar animated variant="success" now={79} />
                        <p>React</p>
                        <ProgressBar animated variant="light" now={67} />
                        <p>Node</p>
                        <ProgressBar animated variant="info" now={50} />
                    </Card.Body>
                </Card>
            </Container>

        </>

    )
}

export default SkillCard
