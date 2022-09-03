import { MeetBodyContainer, MeetChat, MeetChatContainer, MeetChatLink, MeetImageContainer, MeetItemContainer, MeetItemImage, MeetItemDates, MeetItemUsername, MeetTextContainer, MeetUniversityContainer, MeetUniversityText, MeetCountdownText } from "./MeetStyles"
import { FC, useState } from "react"
import { Meet } from "../../ts/interfaces/Meet"
import { MeetCountdown } from "./MeetCountdown"
import '../../ts/extensions/NumberExtension'
import { MeetItemDate } from "./MeetItemDate"

export const MeetItem: FC<MeetItemProperties> = ({ first, last, meet }) => {

    const [active, setActive] = useState(meet.endsAt - Date.now() > 0)

    return <MeetItemContainer first={first} last={last} active={active}>
        <MeetImageContainer>
            <MeetItemImage src="https://joeschmoe.io/api/v1/male/jon" alt="" />
        </MeetImageContainer>
        <MeetBodyContainer>
            <MeetItemUsername>{meet.username}</MeetItemUsername>
            <MeetUniversityContainer>
                <MeetUniversityText color={'#6D6D6D'} size=".7rem">{meet.universityParentName ?? meet.universityName} {`${meet.universityAcronym ? `(${meet.universityAcronym})` : ''}`}</MeetUniversityText>
                <MeetUniversityText size=".65rem" paddingTop={".4rem"}>{`${meet.universityName && meet.universityParentName ? meet.universityName : ''} ${meet.universityFaculty ?? ''}`}</MeetUniversityText>
            </MeetUniversityContainer>
            <MeetTextContainer>
                <MeetItemDate started={meet.startedAt} ends={meet.endsAt} active={active} />
                <MeetCountdown MeetTextComponent={MeetCountdownText} endsAt={meet.endsAt} setActive={setActive} messagesCount={meet.messagesCount} />
            </MeetTextContainer>
            <MeetChatContainer>
                <MeetChatLink to={'/chat'}>
                    <MeetChat disabled={!active}>{meet.messagesCount === 0 ? 'start' : 'continue'} meeting</MeetChat>
                </MeetChatLink>
            </MeetChatContainer >
        </MeetBodyContainer>
    </MeetItemContainer >
}

type MeetItemProperties = {
    first: boolean,
    last: boolean
    meet: Meet,
}