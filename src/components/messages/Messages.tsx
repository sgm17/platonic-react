import { MessageAllUsers, MessageChatConversationColumn, MessageChatConversationImage, MessageChatConversationLastCircle, MessageChatConversationLastContainer, MessageChatConversationLastMessage, MessageChatConversationLastTime, MessageChatConversationText, MessageChatEmptyButton, MessageChatEmptyCircle, MessageChatEmptyContainer, MessageChatEmptyText, MessageChatEmptyTextBody, MessageChatUserName, MessagesChatContent, MessagesChatUser, MessagesContainer, MessagesContent, MessagesConversation, MessagesWrapper } from "./MessagesStyles"
import { RiSendPlaneFill } from 'react-icons/ri'
import { useEffect, useState } from "react"
import { Bubble, BubbleDoubleCheck, BubbleOther, BubbleOtherImage, BubbleOtherUser, BubbleOtherUserImage, BubbleOtherUserWrapper, BubbleRead, BubbleText, BubbleTimeText, BubbleWrapper, ChatContainer, ChatContainerDivided, ChatContainingMessages, UserReturn, UserStatus, UserStatusCircle, UserStatusText } from "./BubbleStyles"
import { AiOutlineLeft } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { retrieveChats, selectChats } from "../../features/chat/chatSlice"
import { Chat } from "../../ts/interfaces/Chat"
import { Input } from "./Input"
import { InputContainer } from "./InputStyles"

export const Messages = () => {
    const myId = 1
    const myUsername = 'sergigarciiaa'

    const chats = useAppSelector(selectChats)
    const dispatch = useAppDispatch()

    const [active, setActive] = useState<Chat>()

    useEffect(() => {
        dispatch(retrieveChats(myId))
    }, [dispatch])

    function ChatContainerMessaging(chat: Chat) {
        return <InputContainer>
            <BubbleOtherUser>
                <UserReturn onClick={() => setActive(undefined)}>
                    <AiOutlineLeft color="#000" size={'20px'} />
                </UserReturn>
                <BubbleOtherImage alt="" src={chat.profileImage} />
                <MessageChatUserName padding={'1rem'}>{chat.username}</MessageChatUserName>
                <UserStatus>
                    <UserStatusCircle />
                    <UserStatusText>online</UserStatusText>
                </UserStatus>
            </BubbleOtherUser>
            <ChatContainingMessages>
                <ChatContainer>
                    <ChatContainerDivided>
                        {chat.messages.map((c, i) => {
                            const sender = c.from === myId
                            const pastMe = i > 0 && i < chat.messages.length - 1 ? chat.messages[i - 1].from === myId : false

                            if (!sender) {
                                return <BubbleWrapper me={sender} pastMe={pastMe}>
                                    <BubbleOtherUserWrapper>
                                        <BubbleOtherUserImage alt="" src={chat.profileImage} />
                                        <Bubble me={sender}>
                                            <BubbleText me={sender}>{c.body}</BubbleText>
                                            <BubbleTimeText>{`${new Date(c.timestamp).getHours()}:${new Date(c.timestamp).getMinutes()}`}</BubbleTimeText>
                                        </Bubble>
                                    </BubbleOtherUserWrapper>
                                </BubbleWrapper>
                            }

                            return <BubbleOther>
                                <BubbleWrapper me={sender} pastMe={pastMe}>
                                    <Bubble me={sender}>
                                        <BubbleText me={sender}>{c.body}</BubbleText>
                                        <BubbleTimeText>{`${new Date(c.timestamp).getHours()}:${new Date(c.timestamp).getMinutes()}`}</BubbleTimeText>
                                    </Bubble>
                                    <BubbleRead>
                                        <BubbleDoubleCheck alt="" src="images/double-check.png" />
                                    </BubbleRead>
                                </BubbleWrapper>

                            </BubbleOther>
                        })}
                    </ChatContainerDivided>
                </ChatContainer>
            </ChatContainingMessages>
        </InputContainer>
    }

    return <MessagesWrapper>
        <MessagesContainer>
            <MessagesContent>
                <MessageAllUsers messages={chats !== undefined}>
                    <MessagesChatUser>
                        <MessageChatUserName padding={undefined}>{myUsername}</MessageChatUserName>
                    </MessagesChatUser>
                    {chats.map((chat, i) => {
                        const lastMessage = chat.messages[chat.messages.length - 1]
                        return <MessagesConversation onClick={() => setActive(chats[i])} key={i}>
                            <MessageChatConversationImage alt="" src={chat.profileImage} />
                            <MessageChatConversationColumn>
                                <MessageChatConversationText>
                                    {chat.username}
                                </MessageChatConversationText>
                                <MessageChatConversationLastContainer>
                                    <MessageChatConversationLastMessage>
                                        {lastMessage.body.length >= 15 ? lastMessage.body.substring(0, 13) + '...' : lastMessage.body}
                                    </MessageChatConversationLastMessage>
                                    <MessageChatConversationLastCircle>·</MessageChatConversationLastCircle>
                                    <MessageChatConversationLastTime>
                                        {chat.lastTime}
                                    </MessageChatConversationLastTime>
                                </MessageChatConversationLastContainer>
                            </MessageChatConversationColumn>
                        </MessagesConversation>
                    })}
                </MessageAllUsers>
                <MessagesChatContent messages={chats !== undefined}>
                    {!active ?
                        <MessageChatEmptyContainer>
                            <MessageChatEmptyCircle>
                                <RiSendPlaneFill size={'70px'} color={'#000'} />
                            </MessageChatEmptyCircle>
                            <MessageChatEmptyText>your messages</MessageChatEmptyText>
                            <MessageChatEmptyTextBody>talk to people from your university</MessageChatEmptyTextBody>
                            <MessageChatEmptyButton to={'/meet'}>start talking</MessageChatEmptyButton>
                        </MessageChatEmptyContainer>
                        : <ChatContainerMessaging
                            username={active.username}
                            to={active.to}
                            profileImage={active.profileImage}
                            lastTime={active.lastTime}
                            messages={active.messages}
                        />}
                </MessagesChatContent>
            </MessagesContent>
        </MessagesContainer>
    </MessagesWrapper>
}