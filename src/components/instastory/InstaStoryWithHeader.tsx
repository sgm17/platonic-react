import { FC } from "react"
import { BsPlayFill, BsPause } from "react-icons/bs"
import { Action } from "react-insta-stories/dist/interfaces"
import { Story } from "../../ts/interfaces/Story"
import { University } from "../../ts/interfaces/University"
import { InstaStoryHeaderContainer, InstaStoryHeaderContent, InstaStoryHeaderControll, InstaStoryHeaderControllContainer, InstaStoryHeaderImage, InstaStoryHeaderImageBorder, InstaStoryHeaderImageContainer, InstaStoryHeaderText, InstaStoryHeaderTextContainer, InstaStoryHeaderTextLink } from "./InstaStoryStyles"
import { MdOutlineReportGmailerrorred } from 'react-icons/md'
import { myId } from "./InstaStoryUniversity"

type InstaStoryWithHeaderProperties = {
    story: Story,
    university?: University,
    action: Action,
    isPaused: boolean
}

export const InstaStoryWithHeader: FC<InstaStoryWithHeaderProperties> = ({ story, university, action, isPaused }) => {

    const timestamp = new Date(story.createdAt)

    const handleClick = () => {
        const paused = isPaused

        if (paused) {
            action('play')
        } else {
            action('pause')
        }
    }

    const isMe = myId === story.userId

    return <InstaStoryHeaderContainer>
        <InstaStoryHeaderContent>
            <InstaStoryHeaderImageContainer>
                <InstaStoryHeaderImageBorder>
                    <InstaStoryHeaderImage alt="" src={story.profileImage} />
                </InstaStoryHeaderImageBorder>
            </InstaStoryHeaderImageContainer>
            <InstaStoryHeaderTextContainer>
                <InstaStoryHeaderText>{`${story.username} ${timestamp.getDate().toTimeDigit()}/${timestamp.getMonth().toTimeDigit()} ${timestamp.getHours().toTimeDigit()}:${timestamp.getMinutes().toTimeDigit()}`}</InstaStoryHeaderText>
                <InstaStoryHeaderTextLink
                    href={`${window.location.origin}/universities?lat=${university?.center[0]}&lon=${university?.center[1]}`}
                    target="_blank">
                    <InstaStoryHeaderText>{university?.parentName ? `${university?.parentName}, ${university?.name}` : university?.name} {university?.acronym ? `(${university?.acronym})` : ''}</InstaStoryHeaderText>
                </InstaStoryHeaderTextLink>
            </InstaStoryHeaderTextContainer>
        </InstaStoryHeaderContent>
        <InstaStoryHeaderControllContainer>
            <InstaStoryHeaderControll>
                {isPaused ? <BsPlayFill size={'30px'} color={'#fff'} onClick={handleClick} style={{ cursor: 'pointer' }} /> :
                    <BsPause size={'30px'} color={'#fff'} onClick={handleClick} style={{ cursor: 'pointer' }} />}
            </InstaStoryHeaderControll>
            <InstaStoryHeaderControll paddingLeft="5px" >
                {isMe && <MdOutlineReportGmailerrorred size={'25px'} color={'#fff'} style={{ cursor: 'pointer' }} />}
            </InstaStoryHeaderControll>
        </InstaStoryHeaderControllContainer>
    </InstaStoryHeaderContainer>
}