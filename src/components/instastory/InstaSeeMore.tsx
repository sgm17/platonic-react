import { useState } from "react"
import { FiSend } from "react-icons/fi"
import { InstaStorySeeMoreForm, InstaStorySeeMoreContainer, InstaStorySeeMoreInput } from "./InstaStoryStyles"

export const InstaSeeMore = () => {

    const [message, setMessage] = useState('')

    const handleClick = () => {
        console.log(message)
    }

    return <InstaStorySeeMoreForm>
        <InstaStorySeeMoreContainer>
            <InstaStorySeeMoreInput placeholder='type a message' onChange={(e) => setMessage(e.target.value)} />
            <FiSend size={'50px'} color={'#fff'} style={{ paddingLeft: '12.5px', cursor: 'pointer' }} onClick={handleClick} />
        </InstaStorySeeMoreContainer>
    </InstaStorySeeMoreForm>
}