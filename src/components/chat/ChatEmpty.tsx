import { ChatEmptyBodyText, ChatEmptyCircleContainer, ChatEmptyContainer, ChatEmptyHeaderText, ChatEmptyStart, ChatEmptyStartLink } from "./ChatEmptySyles"
import { RiSendPlaneFill } from 'react-icons/ri'

export const ChatEmpty = () => {
    return <ChatEmptyContainer>
        <ChatEmptyCircleContainer>
            <RiSendPlaneFill size={'70px'} color={'#000'} />
        </ChatEmptyCircleContainer>
        <ChatEmptyHeaderText>your messages</ChatEmptyHeaderText>
        <ChatEmptyBodyText>talk to people from your university</ChatEmptyBodyText>

        <ChatEmptyStartLink to={'/meet'}>
            <ChatEmptyStart>start talking</ChatEmptyStart>
        </ChatEmptyStartLink>
    </ChatEmptyContainer>
}