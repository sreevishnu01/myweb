import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import NavDash from './layout/navbar/NavDash'
import { FaBars, FaTimes } from 'react-icons/fa'

function Home() {
    const [inactive, setInactive] = useState(false);
    return (
        <>

            <Container fluid className='p-0 m-0'>
                <Row>
                    <Col sm={12} className={inactive ? "col-lg-2 act" : "col-lg-1"}>
                        <Container fluid className={inactive ? 'sidebar-main navitem-active' : 'navitem-inactive sidebar-main'}>
                            <div className="collapse-btn pt-1">
                                {inactive ? (
                                    <FaTimes size="2rem" onClick={() => setInactive(!inactive)} />
                                ) : (
                                    <FaBars size="2rem" onClick={() => setInactive(!inactive)} />
                                )}
                            </div>
                            <NavDash />
                        </Container>
                    </Col>
                    <Col className={inactive ? "main-active" : "main-inactive"}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
