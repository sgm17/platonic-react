import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { ChatItem } from "../components/chat/ChatItem"
import { Loading } from "../components/loading/Loading"
import { retrieveChats, selectStateChatsLoading } from "../features/chat/chatSlice"
import { selectProfile } from "../features/user/userSlice"

export const Chat = () => {
    const dispatch = useAppDispatch()

    const myId = useAppSelector(selectProfile)?.id
    const loading = useAppSelector(selectStateChatsLoading)

    useEffect(() => {
        dispatch(retrieveChats(myId!))
    }, [dispatch])


    if (loading)
        return <Loading loading={loading} />

    return <ChatItem />
}