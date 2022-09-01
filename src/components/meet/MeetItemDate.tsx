import { FC } from "react"
import { MeetItemDates } from "./MeetStyles"

export const MeetItemDate: FC<MeetItemDateProperties> = ({ started, ends, active }) => {

    const startedAt = new Date(started)
    const endsAt = new Date(ends)

    const startedDay = startedAt.getDate()
    const startedMonth = startedAt.getMonth()
    const startedYear = startedAt.getFullYear()
    const startedHours = startedAt.getHours()
    const startedMinutes = startedAt.getMinutes()

    const start = `${startedDay}/${startedMonth}/${startedYear} ${startedHours.toTimeDigit()}:${startedMinutes.toTimeDigit()}`

    if (active) {
        return <MeetItemDates>{`${start} - present`}</MeetItemDates>
    } else {
        const endsDay = endsAt.getDate()
        const endsMonth = endsAt.getMonth()
        const endsYear = endsAt.getFullYear()
        const endsHours = endsAt.getHours()
        const endsMinutes = endsAt.getMinutes()

        return <MeetItemDates>
            {`${start} - ${endsDay}/${endsMonth}/${endsYear} ${endsHours.toTimeDigit()}:${endsMinutes.toTimeDigit()}`}
        </MeetItemDates>
    }
}

type MeetItemDateProperties = {
    started: number,
    ends: number,
    active: boolean
}