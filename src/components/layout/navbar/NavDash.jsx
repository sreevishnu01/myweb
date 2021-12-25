import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavData } from '../../../assets/NavData'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

function NavDash({ inactive, setInactive }) {

    return (
        <>
            <Container className='primary-nav'>
                <ul>
                    {NavData.map(e => (
                        <li key={e.id} onClick={inactive ? () => setInactive(!inactive) : () => e}>
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
                        <a target='_blank' rel="noreferrer" href="https://www.instagram.com/__vishnu__p_unni/">
                            <FaInstagram size="2rem" />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/vishnu-p-unni-839056189/">
                            <FaLinkedin size="2rem" />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel="noreferrer" href="https://github.com/sreevishnu01">
                            <FaGithub size="2rem" />
                        </a>
                    </li>
                </ul>
            </Container>
        </>

    )
}
export default NavDash
