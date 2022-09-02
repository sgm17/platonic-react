import { FC } from "react"
import { Meet } from "../../ts/interfaces/MeetItem"
import { MeetCardBodyContainer, MeetCardButton, MeetCardButtonContainer, MeetCardContainer, MeetCardContent, MeetCardContentContainer, MeetCardCountdown, MeetCardDates, MeetCardDatesContainer, MeetCardHeader, MeetCardHeaderContainer, MeetCardImage, MeetCardImageContainer, MeetCardUniversityContainer, MeetCardUniversityText, MeetCardUsername } from "./MeetCardStyles"

type MeetCardProperties = {
    meet: Meet
}

export const MeetCard: FC<MeetCardProperties> = ({ meet }) => {
    return <MeetCardContainer>
        <MeetCardHeader>you are meeting laura</MeetCardHeader>
        <MeetCardContentContainer>
            <MeetCardContent>
                <MeetCardHeaderContainer>
                    <MeetCardImageContainer>
                        <MeetCardImage src="https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg" alt="" />
                    </MeetCardImageContainer>
                </MeetCardHeaderContainer>
                <MeetCardBodyContainer>
                    <MeetCardUsername>sergigarciiaa</MeetCardUsername>
                    <MeetCardUniversityContainer>
                        <MeetCardUniversityText>Universitat Autònoma de Barcelona (UAB)</MeetCardUniversityText>
                        <MeetCardUniversityText>Facultat de ciències de la terra</MeetCardUniversityText>
                    </MeetCardUniversityContainer>
                    <MeetCardDatesContainer>
                        <MeetCardDates>started at: 24/03/2045 13:54</MeetCardDates>
                        <MeetCardDates>ends at: 24/03/2045 12:45</MeetCardDates>
                    </MeetCardDatesContainer>
                    <MeetCardCountdown>
                        12:00:34
                    </MeetCardCountdown>
                    <MeetCardButtonContainer>
                        <MeetCardButton>direct message</MeetCardButton>
                    </MeetCardButtonContainer>
                </MeetCardBodyContainer>
            </MeetCardContent>
        </MeetCardContentContainer>
    </MeetCardContainer>
}