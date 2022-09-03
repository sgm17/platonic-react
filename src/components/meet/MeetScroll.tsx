import { useAppSelector } from "../../app/hooks"
import { selectMeets } from "../../features/meet/meetSlice"
import { Scroll } from "../scroll/Scroll"
import { MeetItem } from "./MeetItem"


export const MeetScroll = () => {
    const meets = useAppSelector(selectMeets)

    return <Scroll>
        {meets.map((meet, i) => {
            const first = i === 0
            const last = i === meets.length - 1

            return <MeetItem
                key={i}
                meet={meet}
                first={first}
                last={last}
            />
        })}
    </Scroll>
}