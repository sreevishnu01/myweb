import React, { useState, useEffect, useRef } from 'react'
// import { useSpring, animated } from 'react-spring'


function TypingAnim() {
    const [typeingString, setTypingString] = useState('')
    const index = useRef(0)

    useEffect(() => {
        const typeing = `function findCard(cards, cardnum) {
            let high = cards.length - 1;
            let low = 0;
            while (low <= high) {
                let mid = Math.round((high + low) / 2)
                console.log('mid :', mid)
                if (cards[mid] === cardnum) {
                    console.log('position:', mid, 'cardNO:', cards[mid])
                    return 0;
                }
                else if (cards[mid] > cardnum) {
                    low = mid + 1
                }
                else {
                    high = mid - 1
                }
            }
        }`
        setTimeout(() => {
            setTypingString((value) => value + typeing.charAt(index.current))
            index.current += 1
        }, 100)
    }, [typeingString])

    return (
        <>
            <p>{typeingString}</p>

        </>
    )
}

export default TypingAnim
