import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { TextData } from '../../../assets/TextData'
import { useParams } from 'react-router-dom'
import Loading from '../anim&error /Loading'


function MainCards() {
    const { paramId } = useParams()
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState({})
    const [string, setString] = useState([])
    const [CustomTag, setCustom] = useState('')

    useEffect(() => {
        // [["Hi,"], ["I'm Vishnu,"], ["web developer "]]
        setLoading(true)
        const data = TextData.find(e => e.id === paramId)
        setText(data)
        setCustom(`h${data.tag}`)
        const test = []
        let value = data.text.split("/")
        value.forEach(e => test.push([...e]))
        setString(test)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [paramId])

    return (
        <>
            {loading ? (
                <Loading />
            ) : (<div className="main">
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
                        {text.div}
                    </Col>
                    <Col>
                        {text.side}
                    </Col>
                </Row>
            </div>
            )}


        </>
    )
}

export default MainCards
