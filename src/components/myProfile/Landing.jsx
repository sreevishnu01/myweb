import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
// import { useSpring, animated } from 'react-spring'


function Landing() {
    const text = "Hi,/I'm Vishnu,/web developer "
    const [string, setString] = useState([])

    useEffect(() => {
        // [["Hi,"], ["I'm Vishnu,"], ["web developer "]]
        const test = []
        let value = text.split("/")
        value.forEach(e => test.push([...e]))
        setString(test)
    }, [])

    return (
        <Container className=''>
            <div className="big-text">
                {string.map((e, index) => (
                    <h1 key={index}>
                        {e.map((str, index) => (
                            <span id='ruberband' key={index}>{str}</span>
                        ))}
                    </h1>
                ))}
                <p>Front End Developer / Back End Developer</p>
            </div>
        </Container>
    )
}

export default Landing
