import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useSpring, animated, config } from 'react-spring'

function About() {
    const styles = useSpring({
        loop: { reverse: true },
        from: { opacity: 0, y: 0 },
        to: { opacity: 1, y: 10 },
        config: { duration: 1000, config: config.default },
        // from: { rotateZ: 0 },
        // to: { rotateZ: 360 },
    })
    return (
        <>

            <animated.div className="section text-white">
                <animated.h1 style={styles}>
                    <FaStar className='star' />
                </animated.h1>
                <h1>GIT</h1>
                <h1>CSS</h1>
                <h1>JSON</h1>
                <h1>HTML</h1>
                <h1>REDUX</h1>
                <h1>NODEJS</h1>
                <h1>DJANGO</h1>
                <h1>EXPRESS</h1>
                <h1>MONGODB</h1>
                <h1>BOOTSTRAP</h1>
                <h1>MYSQL</h1>
                <h1>SQL</h1>
                <h1>REACTJS</h1>

            </animated.div>
        </>
    )
}

export default About
