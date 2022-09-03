import { FC, useEffect, useState } from "react"
import { Meet } from "../../ts/interfaces/Meet"
import { MeetCardBodyContainer, MeetCardBodyGrid, MeetCardButton, MeetCardContainer, MeetCardContent, MeetCardContentContainer, MeetCardCountdown, MeetCardDates, MeetCardDatesContainer, MeetCardFacultyText, MeetCardHeader, MeetCardHeaderContainer, MeetCardImage, MeetCardImageContainer, MeetCardTitleContainer, MeetCardUniversityContainer, MeetCardUniversityText, MeetCardUsername } from "./MeetCardStyles"
import { MeetCountdown } from "./MeetCountdown"

type MeetCardProperties = {
    meet: Meet,
}

export const MeetCard: FC<MeetCardProperties> = ({ meet }) => {

    const universityName = meet.universityParentName !== undefined ?
        `${meet.universityParentName} ${meet.universityAcronym !== undefined ? `(${meet.universityAcronym}), ` : ', '} ${meet.universityName}` :
        `${meet.universityName} ${meet.universityAcronym !== undefined ? `(${meet.universityAcronym})` : ''}`

    const startedAt = new Date(meet.startedAt)
    const endsAt = new Date(meet.endsAt)

    const [active, setActive] = useState(meet.endsAt - Date.now() > 0)
    const [width, setWidth] = useState<number>(window.innerWidth)
    const isMobile = width <= 768

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);


    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    return <MeetCardContainer>
        <MeetCardHeader>{`you are meeting ${meet.username}`}</MeetCardHeader>
        <MeetCardContentContainer>
            <MeetCardContent>
                <MeetCardHeaderContainer>
                    <MeetCardImageContainer>
                        <MeetCardImage src={meet.profileImage} alt="" />
                    </MeetCardImageContainer>
                </MeetCardHeaderContainer>
                <MeetCardBodyContainer>
                    <MeetCardBodyGrid>
                        <MeetCardTitleContainer>
                            <MeetCardUsername>{meet.username}</MeetCardUsername>
                            {!isMobile && < MeetCardButton>direct message</MeetCardButton>}
                        </MeetCardTitleContainer>
                        <MeetCardUniversityContainer>
                            <MeetCardUniversityText>{universityName}</MeetCardUniversityText>
                            {meet.universityFaculty && <MeetCardFacultyText>{meet.universityFaculty}</MeetCardFacultyText>}
                        </MeetCardUniversityContainer>
                        <MeetCardDatesContainer>
                            <MeetCardDates>started at: {`${startedAt.getDate().toTimeDigit()}/${startedAt.getMonth().toTimeDigit()}/${startedAt.getFullYear().toTimeDigit()} ${startedAt.getHours().toTimeDigit()}:${startedAt.getMinutes().toTimeDigit()}`}</MeetCardDates>
                            <MeetCardDates>ends at: {`${endsAt.getDate().toTimeDigit()}/${endsAt.getMonth().toTimeDigit()}/${endsAt.getFullYear().toTimeDigit()} ${endsAt.getHours().toTimeDigit()}:${endsAt.getMinutes().toTimeDigit()}`}</MeetCardDates>
                        </MeetCardDatesContainer>
                        <MeetCountdown endsAt={meet.endsAt} setActive={setActive} messagesCount={meet.messagesCount} MeetTextComponent={MeetCardCountdown} />
                        {isMobile && <MeetCardButton>direct message</MeetCardButton>}
                    </MeetCardBodyGrid>
                </MeetCardBodyContainer>
            </MeetCardContent>
        </MeetCardContentContainer>
    </MeetCardContainer >
}