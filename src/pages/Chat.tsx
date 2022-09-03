import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { ChatItem } from "../components/chat/Messages"
import { retrieveChats, selectChats } from "../features/chat/chatSlice"
import { selectProfile } from "../features/user/userSlice"
import { Chat as ChatType } from "../ts/interfaces/Chat"

export const Chat = () => {
    const { index } = useParams()
    const dispatch = useAppDispatch()

    const myId = useAppSelector(selectProfile)?.id

    const chats = useAppSelector(selectChats)
    const [chatIndex, setChatIndex] = useState<ChatType>()

    useEffect(() => {
        dispatch(retrieveChats(myId!))
    }, [dispatch])

    return <ChatItem />
}