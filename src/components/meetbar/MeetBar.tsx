import { ScrollMenu } from "react-horizontal-scrolling-menu"
import { MeetBarBorder, MeetBarContainer, MeetBarEndDate, MeetBarFinish, MeetBarImage, MeetBarItem, MeetBarStatusCircle, MeetBarStatusText, MeetBarText } from "./MeetBarStyles"

export const MeetBar = () => {
    return <ScrollMenu >
        <MeetBarContainer>
            {Array.from(Array(10)).map((e, i) => {
                const first = i == 0
                const last = i === 10 - 1
                return MeetBarI(i, first, last)
            })}
        </MeetBarContainer>
    </ScrollMenu>
}

export function MeetBarI(index: number, first: boolean, last: boolean) {
    return <MeetBarItem key={index} first={first} last={last}>
        <MeetBarBorder>
            <MeetBarImage src="https://joeschmoe.io/api/v1/male/jon" alt="" />
        </MeetBarBorder>
        <MeetBarText>sergigarcia</MeetBarText>
        <MeetBarText>22 messages</MeetBarText>
        <MeetBarText>22/08/22 - present</MeetBarText>
        <MeetBarFinish>
            <MeetBarEndDate>27:45:22</MeetBarEndDate>
            <MeetBarStatusCircle active></MeetBarStatusCircle>
            <MeetBarStatusText active>meet active</MeetBarStatusText>
        </MeetBarFinish>
    </MeetBarItem>
}