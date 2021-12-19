import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Skill() {
    const text = 'Skills &/Experince';
    const [string, setString] = useState([])

    useEffect(() => {
        const test = []
        let value = text.split("/")
        value.forEach(e => test.push([...e]))
        setString(test)
    }, [])
    console.log(string)
    return (
        <Container className='full-width'>
            <Row className='full-width'>
                <Col className='position-relative'>
                    <div className="big-text detail position-absolute top-50 start-0 translate-middle-y">
                        {string.map((e, index) => (
                            <h2 key={index}>
                                {e.map((str, index) => (
                                    <span id='ruberband' key={index}>{str}</span>
                                ))}
                            </h2>
                        ))}
                        <p>As a passionate Developer and self-thought programmer, programming has never been "just a job" for me, it's offered an engaging challenge to continually learn and improve my skills in creating high-quality web applications. What has started with a simple "Hello World" has become a full-fledged passion that only gets more exciting as the years go by.</p>
                        <p>I usually tend to be most familiar with the languages that I am using most. I have experience in HTML, CSS, JavaScript, Python, Django, Nodejs, and Reactjs..</p>
                    </div>
                </Col>
                <Col>
                    <h1>skills</h1>
                </Col>
            </Row>

        </Container>
    )
}

export default Skill