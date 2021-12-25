import { useEffect, useState } from 'react'


const useLoading = (value) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [value])

    return { loading }

}

export default useLoading