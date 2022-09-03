import { BubbleOtherUserImage, ChatBubbleBody, ChatBubbleTimeText, ChatBubbleDoubleCheck, ChatBubbleContent, ChatBubbleContainer, BubbleOtherUserContainer, ChatBubbleMyContainer, ChatBubbleRead, } from "./ChatBubbleStyles";
import { FC } from "react";
import { Message } from "../../ts/interfaces/Chat";
import { User } from "../../ts/interfaces/User";
import whitecheck from "../../assets/images/chat-check.png"
import check from "../../assets/images/chat-check-white.png"

type ChatBubbleProperties = {
    user: User,
    message: Message,
    sender: boolean,
    pastMe: boolean
}

export const ChatBubble: FC<ChatBubbleProperties> = ({ user, message, sender, pastMe }) => {

    if (!sender)
        return <ChatBubbleContainer me={sender} pastMe={pastMe}>
            <BubbleOtherUserContainer>
                <BubbleOtherUserImage alt="" src={user.profileImage} />
                <ChatBubbleContent me={sender}>
                    <ChatBubbleBody me={sender}>{message.body}</ChatBubbleBody>
                    <ChatBubbleTimeText>{`${new Date(message.timestamp).getHours().toTimeDigit()}:${new Date(message.timestamp).getMinutes().toTimeDigit()}`}</ChatBubbleTimeText>
                </ChatBubbleContent>
            </BubbleOtherUserContainer>
        </ChatBubbleContainer>


    return <ChatBubbleMyContainer>
        <ChatBubbleContainer me={sender} pastMe={pastMe}>
            <ChatBubbleContent me={sender}>
                <ChatBubbleBody me={sender}>{message.body}</ChatBubbleBody>
                <ChatBubbleTimeText>{`${new Date(message.timestamp).getHours().toTimeDigit()}:${new Date(message.timestamp).getMinutes().toTimeDigit()}`}</ChatBubbleTimeText>
            </ChatBubbleContent>
            <ChatBubbleRead>
                {message.read ? <ChatBubbleDoubleCheck alt="" src={whitecheck} />
                    : <ChatBubbleDoubleCheck alt="" src={check} />}
            </ChatBubbleRead>
        </ChatBubbleContainer>
    </ChatBubbleMyContainer>
}