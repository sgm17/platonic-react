import { FC } from "react"
import { Chat } from "../../ts/interfaces/Chat"
import { ChatUserItemCircleSeparator, ChatUserItemContainer, ChatUserItemImage, ChatUserItemTextContainer, ChatUserItemUsername, ChatUserItemLastMessageContainer, ChatUserItemLastMessageText, ChatUserItemLastTimeText } from "./ChatUserItemStyles"

type ChatUserItemProperties = {
    chat: Chat,
    index: number,
    setActiveChat: Function
}

export const ChatUserItem: FC<ChatUserItemProperties> = ({ chat, index, setActiveChat }) => {
    const lastMessage = chat.messages[chat.messages.length - 1]
    const lastTimeOnline = new Date(chat.toUser.lastTimeOnline)

    return <ChatUserItemContainer onClick={() => setActiveChat(index)} >
        <ChatUserItemImage alt="" src={chat.toUser.profileImage} />
        <ChatUserItemTextContainer>
            <ChatUserItemUsername>
                {chat.toUser.username}
            </ChatUserItemUsername>
            <ChatUserItemLastMessageContainer>
                <ChatUserItemLastMessageText>
                    {lastMessage.body.length >= 15 ? lastMessage.body.substring(0, 13) + '...' : lastMessage.body}
                </ChatUserItemLastMessageText>
                <ChatUserItemCircleSeparator>·</ChatUserItemCircleSeparator>
                <ChatUserItemLastTimeText>
                    {`${lastTimeOnline.getDate().toTimeDigit()}/${lastTimeOnline.getMonth().toTimeDigit()}/${lastTimeOnline.getFullYear().toTimeDigit()} ${lastTimeOnline.getHours().toTimeDigit()}:${lastTimeOnline.getMinutes().toTimeDigit()}`}
                </ChatUserItemLastTimeText>
            </ChatUserItemLastMessageContainer>
        </ChatUserItemTextContainer>
    </ChatUserItemContainer>
}