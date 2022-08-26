import { MessageAllUsers, MessageChatConversationColumn, MessageChatConversationImage, MessageChatConversationLastCircle, MessageChatConversationLastContainer, MessageChatConversationLastMessage, MessageChatConversationLastTime, MessageChatConversationText, MessageChatEmptyButton, MessageChatEmptyCircle, MessageChatEmptyContainer, MessageChatEmptyText, MessageChatEmptyTextBody, MessageChatUserName, MessagesChatContent, MessagesChatUser, MessagesContainer, MessagesContent, MessagesConversation, MessagesWrapper } from "./MessagesStyles"
import { RiSendPlaneFill } from 'react-icons/ri'
import { useState } from "react"
import { Bubble, BubbleDoubleCheck, BubbleOther, BubbleOtherImage, BubbleOtherUser, BubbleOtherUserImage, BubbleOtherUserWrapper, BubbleRead, BubbleText, BubbleTimeText, BubbleWrapper, ChatContainer, ChatContainerDivided, ChatContainingMessages, UserReturn, UserStatus, UserStatusCircle, UserStatusText } from "../bubble/BubbleStyles"
import { AiOutlineLeft } from 'react-icons/ai'

export const Messages = () => {
    const username = 'sergigarciiaa'

    const [conversations, setConversations] = useState([
        {
            username: 'joangarcia',
            lastMessage: 'q3f3qkkq4k4gffw',
            lastTime: '30min',
            profileImage: 'https://picsum.photos/100/100',
        },
        {
            username: 'robert lewandoski',
            lastMessage: 'wkoefekfekomwf',
            lastTime: '50min',
            profileImage: 'https://picsum.photos/100/95',
        }
    ])

    const [messages, setMessages] = useState<Conversation>()

    type Conversation = {
        username: string,
        profileImage: string,
        messages: Message[]
    }

    type Message = {
        message: string,
        from: string,
        to: string,
        read: boolean | undefined,
        timestamp: number
    }

    const messagesApiPerUser = [
        {
            username: 'joangarcia',
            profileImage: 'https://picsum.photos/100/100',
            messages: [
                {
                    message: 'q3f3qkkq4k4gffwerajvrjnvv nfean`vnriv `noevìnoafniniv nàf`nr`nanoivnenv  `wnìncnjdknkadsknjkjndnkvjaknvknkvdknj',
                    from: 'joangarcia',
                    to: username,
                    read: false,
                    timestamp: Date.now() - 2000000
                },
                {
                    message: 'anjjevndasvdv kjvnankjnjvkv jjnvaknev janvnjrenriac najjfeavjnavnrvnavjeknvk jnjkanvrvanvnñnvrvnjk njeavenjrnjrnaenvnvanjenjkrn',
                    from: username,
                    to: 'joangarcia',
                    read: undefined,
                    timestamp: Date.now() - 1900000
                },
                {
                    message: 'kewkfekm ewmkfcewkcekl kldslcemwkfemkl kmdewmdkqwwlkwklm fekwlfemw',
                    from: username,
                    to: 'joangarcia',
                    read: undefined,
                    timestamp: Date.now() - 1800000
                },
                {
                    message: 'k ew ekdkvc kew',
                    from: username,
                    to: 'joangarcia',
                    read: undefined,
                    timestamp: Date.now() - 1700000
                },
                {
                    message: 'ahahaahah okk',
                    from: 'joangarcia',
                    to: username,
                    read: false,
                    timestamp: Date.now() - 1500000
                },
                {
                    message: 'k ew ekdkvc kew',
                    from: username,
                    to: 'joangarcia',
                    read: undefined,
                    timestamp: Date.now() - 1000000
                },
                {
                    message: 'qkmwdwdmklwfmdmkwefml',
                    from: username,
                    to: 'joangarcia',
                    read: undefined,
                    timestamp: Date.now() - 500000
                },
                {
                    message: 'lmao wtfwevecev',
                    from: 'joangarcia',
                    to: username,
                    read: false,
                    timestamp: Date.now() - 200000
                },
                {
                    message: 'xewdeefcewfefewfevefe',
                    from: username,
                    to: 'joangarcia',
                    read: undefined,
                    timestamp: Date.now()
                },
                {
                    message: 'xewdeefcewfefewfevefe',
                    from: username,
                    to: 'joangarcia',
                    read: undefined,
                    timestamp: Date.now()
                },
                {
                    message: 'xewdeefcewfefewfevefe',
                    from: username,
                    to: 'joangarcia',
                    read: undefined,
                    timestamp: Date.now()
                },
            ]
        },
        {
            username: 'robert lewandoski',
            profileImage: 'https://picsum.photos/100/95',
            messages: [
                {
                    message: 'wkoefekfekomwf',
                    from: 'robert lewandoski',
                    to: username,
                    read: undefined,
                    timestamp: Date.now() - 200000
                },
                {
                    message: 'wkoefekfekomwf',
                    from: username,
                    to: 'robert lewandoski',
                    read: undefined,
                    timestamp: Date.now()
                }
            ]
        }
    ]

    function handleClick(i: number) {
        setMessages(messagesApiPerUser[i])
    }

    function ChatContainerMessaging(conv: Conversation) {
        return <ChatContainingMessages>
            <BubbleOtherUser>
                <UserReturn onClick={() => setMessages(undefined)}>
                    <AiOutlineLeft color="#000" size={'20px'} />
                </UserReturn>
                <BubbleOtherImage alt="" src={conv.profileImage} />
                <MessageChatUserName padding={'1rem'}>{conv.username}</MessageChatUserName>
                <UserStatus>
                    <UserStatusCircle />
                    <UserStatusText>online</UserStatusText>
                </UserStatus>
            </BubbleOtherUser>
            <ChatContainer>
                <ChatContainerDivided>
                    {conv.messages.map((c, i) => {
                        const sender = c.from === username
                        const pastMe = i > 0 && i < conv.messages.length - 1 ? conv.messages[i - 1].from === username : false

                        if (!sender) {
                            return <BubbleWrapper me={sender} pastMe={pastMe}>
                                <BubbleOtherUserWrapper>
                                    <BubbleOtherUserImage alt="" src={conv.profileImage} />
                                    <Bubble me={sender}>
                                        <BubbleText me={sender}>{c.message}</BubbleText>
                                        <BubbleTimeText>{`${new Date(c.timestamp).getHours()}:${new Date(c.timestamp).getMinutes()}`}</BubbleTimeText>
                                    </Bubble>
                                </BubbleOtherUserWrapper>
                            </BubbleWrapper>
                        }

                        return <BubbleOther>
                            <BubbleWrapper me={sender} pastMe={pastMe}>
                                <Bubble me={sender}>
                                    <BubbleText me={sender}>{c.message}</BubbleText>
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
    }

    return <MessagesWrapper>
        <MessagesContainer>
            <MessagesContent>
                <MessageAllUsers messages={messages !== undefined}>
                    <MessagesChatUser>
                        <MessageChatUserName padding={undefined}>{username}</MessageChatUserName>
                    </MessagesChatUser>
                    {conversations.map((conversation, i) => {
                        return <MessagesConversation onClick={() => handleClick(i)} key={i}>
                            <MessageChatConversationImage alt="" src={conversation.profileImage} />
                            <MessageChatConversationColumn>
                                <MessageChatConversationText>
                                    {conversation.username}
                                </MessageChatConversationText>
                                <MessageChatConversationLastContainer>
                                    <MessageChatConversationLastMessage>
                                        {conversation.lastMessage.length >= 15 ? conversation.lastMessage.substring(0, 13) + '...' : conversation.lastMessage}
                                    </MessageChatConversationLastMessage>
                                    <MessageChatConversationLastCircle>·</MessageChatConversationLastCircle>
                                    <MessageChatConversationLastTime>
                                        {conversation.lastTime}
                                    </MessageChatConversationLastTime>
                                </MessageChatConversationLastContainer>
                            </MessageChatConversationColumn>
                        </MessagesConversation>
                    })}
                </MessageAllUsers>
                <MessagesChatContent messages={messages !== undefined}>
                    {!messages ?
                        <MessageChatEmptyContainer>
                            <MessageChatEmptyCircle>
                                <RiSendPlaneFill size={'70px'} color={'#000'} />
                            </MessageChatEmptyCircle>
                            <MessageChatEmptyText>your messages</MessageChatEmptyText>
                            <MessageChatEmptyTextBody>talk to people from your university</MessageChatEmptyTextBody>
                            <MessageChatEmptyButton to={'/meet'}>start talking</MessageChatEmptyButton>
                        </MessageChatEmptyContainer>
                        : <ChatContainerMessaging
                            username={messages.username}
                            profileImage={messages.profileImage}
                            messages={messages.messages}
                        />}
                </MessagesChatContent>
            </MessagesContent>
        </MessagesContainer>
    </MessagesWrapper>
}