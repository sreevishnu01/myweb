import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap'
import { TextData } from '../../../assets/TextData'

// crate data that have all the esntnal details for className


function MainCards({ id }) {
    const text = TextData[id]
    const CustomTag = `h${text.tag}`
    const [string, setString] = useState([])

    useEffect(() => {
        // [["Hi,"], ["I'm Vishnu,"], ["web developer "]]
        const test = []
        let value = text.text.split("/")
        value.forEach(e => test.push([...e]))
        setString(test)
    }, [id])

    return (
        <>
            <div className="main">
                <Row>
                    <Col>
                        <div className={text.home ? "big-text" : "big-text detail"}>
                            {string.map((e, index) => (
                                <CustomTag key={index}>
                                    {e.map((str, index) => (
                                        <span id='ruberband' key={index}>{str}</span>
                                    ))}
                                </CustomTag>
                            ))}
                            <p>{text.p}</p>
                            <p>{text.p2}</p>
                        </div>

                    </Col>
                    <Col>
                        {text.side}
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default MainCards
