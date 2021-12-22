import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loading() {
    return (
        <>
            <div className='spiner-cener'>
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="light" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />

            </div>

        </>
    )
}

export default Loading
