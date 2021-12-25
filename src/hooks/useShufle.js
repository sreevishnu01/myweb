import { useEffect, useState } from 'react'

function useShufle(arry, sec) {
    const [shuffle, setShufle] = useState()

    useEffect(() => {
        const t = setInterval(() => {
            setShufle(arry.sort(() => Math.random() - 0.5))
        }, sec);
        return () => clearInterval(t)
    }, [arry, sec])

    return { shuffle }

}

export default useShufle
