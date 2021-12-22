import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { TextData } from '../../../assets/TextData'
import { useParams } from 'react-router-dom'


function MainCards() {
    const { paramId } = useParams()
    const [text, setText] = useState({})
    const [string, setString] = useState([])
    const [CustomTag, setCustom] = useState('')

    useEffect(() => {
        // [["Hi,"], ["I'm Vishnu,"], ["web developer "]]
        const data = TextData.find(e => e.id === paramId)
        setText(data)
        setCustom(`h${data.tag}`)
        const test = []
        let value = data.text.split("/")
        value.forEach(e => test.push([...e]))
        setString(test)
    }, [paramId])

    return (
        <>
            <div className="main">
                <Row>
                    <Col xs={12} lg>
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
