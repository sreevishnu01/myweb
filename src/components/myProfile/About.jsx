import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function About() {
    const text = "My self"
    const [string, setString] = useState([])

    useEffect(() => {
        // alert('about mount');
        const test = []
        let value = text.split("")
        value.forEach(e => test.push([...e]))
        setString(value)
    }, [])
    console.log(string)
    return (
        <Container className='full-width'>
            <Row className='full-width'>
                <Col className='position-relative'>
                    <div className="big-text detail position-absolute top-50 start-0 translate-middle-y">

                        <h2 >
                            {string.map((str, index) => (
                                <span id='ruberband' key={index}>{str}</span>
                            ))}
                        </h2>

                        <p>My passion for computers begins with video games. When I received my first computer at the age of 8 since then I knew that I wanted to work on computers for the rest of my life. This machine never ceases to amaze me. Using the computer all these years make me a natural problem solver.</p>
                        <p></p>
                    </div>
                </Col>
                <Col>
                    <h1>skills</h1>
                </Col>
            </Row>

        </Container>
    )
}

export default About
