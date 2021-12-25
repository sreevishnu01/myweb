import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import { Card, Container } from 'react-bootstrap'
import useShufle from '../../hooks/useShufle'
import { Images } from '../../assets/Images'
import Loading from '../layout/anim&error/Loading'

function Work() {
    //   ----***----
    const pics = [0, 1, 2, 3]

    const { shuffle } = useShufle(pics, 3000)

    const styles = useSpring({
        loop: true,
        // from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        // to: { opacity: 1 },
        config: config.default,
    })
    return (
        <>
            {shuffle ? (
                <Container className='fullpage center-grid work'>
                    <div className='slide main'>
                        {shuffle.slice(0, 3).map((e, index) => (
                            <animated.div style={styles}
                                key={index} className="work-imgs " >
                                <Card border='primary'>
                                    <a target='_blank' rel="noreferrer" href={Images[e].url}>
                                        <Card.Img src={process.env.PUBLIC_URL + Images[e].src} />
                                    </a>
                                </Card>
                            </animated.div>
                        ))}

                    </div>
                </Container>
            ) : (
                <Loading />
            )}




        </>
    )
}

export default Work
