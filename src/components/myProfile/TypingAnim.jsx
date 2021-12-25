import React, { useState, useEffect, useRef } from 'react'
// import { useSpring, animated } from 'react-spring'


function TypingAnim() {
    const [typeingString, setTypingString] = useState('')
    const index = useRef(0)

    useEffect(() => {
        const typeing = `<p>function programer(name){<br></p>
            <p>&nbsp;console.log(&quot;Hello&quot;,name)<br>}</p><br>
            setTimeout(() => {
                setTypingString((value) => value + typeing.charAt(index.current))
                index.current += 1
            }, 100)
            `
        const t = setTimeout(() => {
            setTypingString((value) => value + typeing.charAt(index.current))
            index.current += 1
        }, 100)
        return () => clearInterval(t)
    }, [typeingString])

    return (
        <>
            <div className="programing">
                <p dangerouslySetInnerHTML={{ __html: typeingString }}></p>
                <p id='blink'>&nbsp;</p>
            </div>

        </>
    )
}

export default TypingAnim
