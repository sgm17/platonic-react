import { FC } from "react"
import { AiOutlineLeft } from "react-icons/ai"
import { Chat, Message } from "../../ts/interfaces/Chat"
import { ChatBubble } from "./ChatBubble"
import { ChatMessagesContainer, ChatConversationContainer, ChatConversationOtherUserContainer, ChatConversationReturnContainer, ChatConversationUsername, ChatConversationOtherUserImage, ChatConversationOtherUserStatusContainer, ChantConversationOtherUserStatusCircle, ChatConversationOtherUserStatusText, ChatMessagesContent, ChatMessagesWrapper, ChatDateText } from "./ChatConversationStyles"
import { ChatInput } from "./ChatInput"
import { ChatStory } from "./ChatAction"

type ChatConversationProperties = {
    chat: Chat,
    myId: number,
    setActive: Function
}

export const ChatConversation: FC<ChatConversationProperties> = ({ chat, myId, setActive }) => {
    return <ChatConversationContainer>
        <ChatConversationOtherUserContainer>
            <ChatConversationReturnContainer onClick={() => setActive(undefined)}>
                <AiOutlineLeft color="#000" size={'20px'} />
            </ChatConversationReturnContainer>
            <ChatConversationOtherUserImage alt="" src={chat.toUser.profileImage} />
            <ChatConversationUsername padding={'1rem'}>{chat.toUser.username}</ChatConversationUsername>
            <ChatConversationOtherUserStatusContainer>
                <ChantConversationOtherUserStatusCircle online={chat.toUser.online} />
                <ChatConversationOtherUserStatusText online={chat.toUser.online}>{chat.toUser.online ? 'online' : 'online'}</ChatConversationOtherUserStatusText>
            </ChatConversationOtherUserStatusContainer>
        </ChatConversationOtherUserContainer>
        <ChatMessagesWrapper>
            <ChatMessagesContainer>
                <ChatMessagesContent>
                    {chat.messages.map((message, i) => {
                        const pastMessage = i < chat.messages.length - 1 ? chat.messages[i - 1] : undefined
                        const sender = message.from === myId
                        const pastMe = i > 0 && pastMessage ? pastMessage.from === myId : false

                        const pastMessageDate = pastMessage ? new Date(pastMessage.timestamp) : undefined
                        const actualMessageDate = new Date(message.timestamp)

                        const isNewDate = pastMessageDate ?
                            pastMessageDate.getFullYear() != actualMessageDate.getFullYear() ||
                            pastMessageDate.getMonth() != actualMessageDate.getMonth() ||
                            pastMessageDate.getDate() != actualMessageDate.getDate()
                            : false

                        const newDate = new Date(message.timestamp)
                        const dateText = `${newDate.getFullYear().toTimeDigit()}/${newDate.getMonth().toTimeDigit()}/${newDate.getDate().toTimeDigit()} ${newDate.getHours().toTimeDigit()}:${newDate.getMinutes().toTimeDigit()}`

                        if (i === 0)
                            return <>
                                <ChatDateText>{dateText}</ChatDateText>
                                <ChatStory action={chat.action} />
                                <ChatBubble
                                    key={i}
                                    user={chat.toUser}
                                    message={message}
                                    sender={sender}
                                    pastMe={pastMe} />
                            </>

                        if (isNewDate) {
                            return <>
                                <ChatDateText>{dateText}</ChatDateText>
                                <ChatBubble
                                    key={i}
                                    user={chat.toUser}
                                    message={message}
                                    sender={sender}
                                    pastMe={pastMe} />
                            </>
                        }

                        return <ChatBubble
                            key={i}
                            user={chat.toUser}
                            message={message}
                            sender={sender}
                            pastMe={pastMe} />

                    })}
                </ChatMessagesContent>
            </ChatMessagesContainer>
            <ChatInput />
        </ChatMessagesWrapper>
    </ChatConversationContainer>
}