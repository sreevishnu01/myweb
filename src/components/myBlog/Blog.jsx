import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'


function Blog() {
    return (
        <div>
            <Container fluid className='text-white'>
                <Row>
                    <Col sm={12} lg={1}>
                        <Container>
                            <div className="red">

                            </div>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <div className="yellow"></div>
                            <div className="yellow">

                            </div>
                            <Row>
                                <Col sm={12} lg={1}>
                                    <Container>
                                        <div className="red">

                                        </div>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container>
                                        <div className="yellow"></div>
                                        <div className="yellow">

                                        </div>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Blog
