import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { TextData } from '../assets/TextData'

function useSplit() {

    const location = useLocation()
    const params = location.pathname.split("/")[1];

    // const { paramId } = useParams()
    const [text, setText] = useState({})
    const [string, setString] = useState([])
    const [CustomTag, setCustom] = useState('')

    useEffect(() => {
        // [["Hi,"], ["I'm Vishnu,"], ["web developer "]]
        const data = TextData.find(e => e.id === params)
        setText(data)
        setCustom(`h${data.tag}`)
        const test = []
        let value = data.text.split("/")
        value.forEach(e => test.push([...e]))
        setString(test)
    }, [params])

    return { text, string, CustomTag }

}

export default useSplit
