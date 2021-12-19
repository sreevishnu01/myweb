import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import NavDash from './layout/navbar/NavDash'
import { FaBars, FaTimes } from 'react-icons/fa'

function Home() {
    const [inactive, setInactive] = useState(true);
    return (
        <>

            <Container fluid className='p-0'>
                <Row>
                    <Col className={inactive ? "col-lg-2" : "col-lg-1"}>
                        <Container fluid className='sidebar-main'>
                            <div className="collapse-btn pt-1">
                                {inactive ? (
                                    <FaTimes size="2rem" onClick={() => setInactive(!inactive)} />
                                ) : (
                                    <FaBars size="2rem" onClick={() => setInactive(!inactive)} />
                                )}
                            </div>
                            <div className={inactive ? "navitem-active" : "navitem-inactive"}>
                                <NavDash />
                            </div>
                        </Container>
                    </Col>
                    <Col className={inactive ? "main-active" : "main-inactive"}>
                        <div className="red">sscsdcscdcscsdcsdcdscdss</div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
