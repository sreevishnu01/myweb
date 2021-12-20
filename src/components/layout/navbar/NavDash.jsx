import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavData } from './NavData'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

function NavDash({ inactive }) {

    return (
        <>
            <Container className='primary-nav'>
                <ul>
                    {NavData.map(e => (
                        <li key={e.id}>
                            <Link to={e.path}>
                                {e.icon}
                                <span>{e.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Container>
            <Container className='social'>
                <ul className='social-icons'>
                    <li>
                        <Link to="#">
                            <FaInstagram size="2rem" />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <FaLinkedin size="2rem" />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <FaGithub size="2rem" />
                        </Link>
                    </li>
                </ul>
            </Container>
        </>

    )
}
export default NavDash
