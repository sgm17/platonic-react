import { FC } from "react"
import { Action } from "../../ts/interfaces/Chat"
import { ChatStoryBody, ChatStoryContainer, ChatStoryContent, ChatStorySeparator, ChatStoryText } from "./ChatStoryStyles"
import { Story } from '../../ts/interfaces/Story'

type ChatStoryProperties = {
    action: Action
}

export const ChatStory: FC<ChatStoryProperties> = <T extends ChatStoryProperties>(action: T) => {

    if ('body' in action.action) {
        return <ChatStoryContainer>
            <ChatStoryContent background={action.action.backgroundColor}>
                <ChatStoryBody>{action.action.body}</ChatStoryBody>
            </ChatStoryContent>
            <ChatStoryText>{action.action.username} has replied your story</ChatStoryText>
            <ChatStorySeparator />
        </ChatStoryContainer>
    }

    return <ChatStoryContainer>
        <ChatStoryText>{action.action.username} has started meeting you</ChatStoryText>
        <ChatStorySeparator />
    </ChatStoryContainer>
}