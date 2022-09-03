import { ChatItemLeftPanel, ChatItemUsername, ChatItemUsernameContainer, ChatItemPadding, ChatItemContent, ChatItemContainer, ChatItemConversation } from "./ChatItemStyles"
import { useAppSelector } from "../../app/hooks"
import { selectChats } from "../../features/chat/chatSlice"
import { ChatUserItem } from "./ChatUserItem"
import { useState } from "react"
import { Chat } from "../../ts/interfaces/Chat"
import { useParams, useSearchParams } from "react-router-dom"
import { selectProfile } from "../../features/user/userSlice"
import { ChatEmpty } from "./ChatEmpty"
import { ChatConversation } from "./ChatConversation"

export const ChatItem = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const chatToId = searchParams.get("id")

    const checkIndexNotNull = chatToId !== null
    const checkIndexIsNumber = !isNaN(Number(chatToId))

    const chats = useAppSelector(selectChats)
    const username = useAppSelector(selectProfile)?.username
    const myId = useAppSelector(selectProfile)?.id

    const findChat = chats.find(({ from, to }) => from === Number(chatToId) || to === Number(chatToId))

    const parameterIndex = checkIndexNotNull && checkIndexIsNumber && findChat !== undefined

    const [activeChat, setActiveChat] = useState<Chat | undefined>(parameterIndex ? findChat : undefined)

    const handleActiveChat = (index: number | undefined) => {
        setActiveChat(index !== undefined ? chats[index] : undefined)
    }

    const isMobile = false

    return <ChatItemContainer>
        <ChatItemPadding>
            <ChatItemContent>
                <ChatItemLeftPanel messages={activeChat !== undefined}>
                    <ChatItemUsernameContainer>
                        <ChatItemUsername padding={undefined}>{username!}</ChatItemUsername>
                    </ChatItemUsernameContainer>
                    {chats.map((chat, i) => {
                        return <ChatUserItem
                            chat={chat}
                            index={i}
                            key={i}
                            setActiveChat={handleActiveChat} />
                    })}
                </ChatItemLeftPanel>
                <ChatItemConversation messages={activeChat !== undefined}>
                    {chats.length > 0 &&
                        activeChat !== undefined ?
                        <ChatConversation
                            chat={activeChat}
                            myId={myId!}
                            setActive={handleActiveChat}
                        /> : <ChatEmpty />}
                </ChatItemConversation>
            </ChatItemContent>
        </ChatItemPadding>
    </ChatItemContainer>
}