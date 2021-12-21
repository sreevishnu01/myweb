import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MainCards from '../layout/cards/MainCards'
// import { useSpring, animated } from 'react-spring'


function Landing() {
    const text = "Hi,/I'm Vishnu,/web developer "
    const [string, setString] = useState([])
    const [typeingString, setTypingString] = useState('')
    const index = useRef(0)
    const typeing = `function findCard(cards, cardnum) {
        let high = cards.length - 1;
        let low = 0;
        while (low <= high) {
            let mid = Math.round((high + low) / 2)
            console.log('mid :', mid)
            if (cards[mid] === cardnum) {
                console.log('position:', mid, 'cardNO:', cards[mid])
                return 0;
            }
            else if (cards[mid] > cardnum) {
                low = mid + 1
            }
            else {
                high = mid - 1
            }
        }
    }`

    useEffect(() => {
        // [["Hi,"], ["I'm Vishnu,"], ["web developer "]]
        const test = []
        let value = text.split("/")
        value.forEach(e => test.push([...e]))
        setString(test)

        setTimeout(() => {
            setTypingString((value) => value + typeing.charAt(index.current))
            index.current += 1
        }, 100)
    }, [typeingString])

    return (
        // <Container fluid>
        //     <Row>
        //         <Col md={7} className='center-flex'>
        //             <Container className='p-0'>
        //                 <div className="big-text">
        //                     {string.map((e, index) => (
        //                         <h1 key={index}>
        //                             {e.map((str, index) => (
        //                                 <span id='ruberband' key={index}>{str}</span>
        //                             ))}
        //                         </h1>
        //                     ))}
        //                     <p>Front End Developer / Back End Developer</p>
        //                 </div>
        //             </Container>

        //         </Col>
        //         <Col>
        //             <Container>
        //                 <div className='programing'>
        //                     <p>{typeingString}
        //                         <div> </div>
        //                     </p>
        //                 </div>

        //             </Container>
        //         </Col>
        //     </Row>
        // </Container>
        <>
            <MainCards id={0} />
        </>
    )
}

export default Landing
