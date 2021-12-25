import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import useLoading from '../../../hooks/useLoading'
import Loading from '../anim&error/Loading'
import useSplit from '../../../hooks/useSplit'


function MainCards() {

    const { paramId } = useParams()
    const { loading } = useLoading(paramId)//custom hook fot loading

    const { text, string, CustomTag } = useSplit()

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Container className='fullpage center-grid'>
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
                                {text.div}
                            </Col>
                            <Col>
                                {text.side}
                            </Col>
                        </Row>
                    </div>
                </Container>
            )}
        </>
    )
}

export default MainCards
