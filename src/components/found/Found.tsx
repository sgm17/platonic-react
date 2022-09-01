import { FoundBody, FoundContainer, FoundTextContainer, FoundTitle, FoundWrapper } from "./FoundStyles"

export const Found = () => {
    return <FoundWrapper>
        <FoundContainer>
            <FoundTextContainer>
                <FoundTitle>
                    you are meeting laura
                </FoundTitle>
                <FoundBody>
                    laura is a girl that is studying at the universitat autonoma de barcelona. she studies at the medicine faculty.
                </FoundBody>
                <FoundBody>
                    start meeting her, but before an advise: talk respektfully and be original
                </FoundBody>
            </FoundTextContainer>
            {/*MeetCard(0, false, false)*/}
        </FoundContainer>
    </FoundWrapper>
}