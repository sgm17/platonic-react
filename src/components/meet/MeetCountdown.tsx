import { FC, useEffect, useState } from "react"
import { MeetCountdownText } from "./MeetStyles"

type CountdownProperties = {
    endsAt: number,
    setActive: Function,
    messagesCount: number
}

export const MeetCountdown: FC<CountdownProperties> = ({ endsAt, setActive, messagesCount }) => {
    const [difference, setDifference] = useState(endsAt - Date.now())

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    const active = difference > 0

    useEffect(() => {
        const timer = setInterval(() => {
            if (active) {
                setDifference(endsAt - Date.now())
            } else {
                setActive(false)
            }
        }, 1000)
        return () => { clearInterval(timer) }
    }, [difference])

    return <MeetCountdownText>
        {active ?
            `the meet ends in ${days.toTimeDigit()}:${hours.toTimeDigit()}:${minutes.toTimeDigit()}:${seconds.toTimeDigit()}` :
            `the meet has ended with ${messagesCount} ${messagesCount <= 1 ? 'message' : 'messages'}`}
    </MeetCountdownText>
}