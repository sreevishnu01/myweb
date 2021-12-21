import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MainCards from '../layout/cards/MainCards'

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
        // <Container fluid className='fullpage'>
        //     <Row>
        //         <Col>
        //             <Container>
        //                 <div className='vertical-center'>
        //                     <div className="big-text detail">
        //                         <h2 >
        //                             {string.map((str, index) => (
        //                                 <span id='ruberband' key={index}>{str}</span>
        //                             ))}
        //                         </h2>
        //                         <p>My passion for computers begins with video games. When I received my first computer at the age of 8 since then I knew that I wanted to work on computers for the rest of my life. This machine never ceases to amaze me. Using the computer all these years make me a natural problem solver.</p>
        //                     </div>
        //                 </div>
        //             </Container>
        //         </Col>
        //         <Col>
        //             <h1>skills</h1>
        //         </Col>
        //     </Row>

        // </Container>
        <>
            <MainCards id={1} />
        </>
    )
}

export default About
