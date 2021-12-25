// import React, { useState, useEffect } from 'react'
// import { Col, Container, Row, Card } from 'react-bootstrap'
import useSplit from "../../hooks/useSplit"
import MainCards from "../layout/cards/MainCards"



function Blog() {

    const { text, string, CustomTag } = useSplit()

    return (
        <div className='fullpage center-grid center'>
            <div className="main">
                <div className="big-text ">
                    {string.map((e, index) => (
                        <CustomTag key={index}>
                            {e.map((str, index) => (
                                <span id='ruberband' key={index}>{str}</span>
                            ))}
                        </CustomTag>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog
