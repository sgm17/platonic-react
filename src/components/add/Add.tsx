import { AddContainer, AddBackground } from "./AddStyles"
import { useEffect, useState } from "react"
import { AddItem } from "./AddItem"
import { useAppSelector } from "../../app/hooks"
import { selectStoriesCreated, selectStoriesStateLoading } from "../../features/story/storySlice"
import ClipLoader from "react-spinners/ClipLoader"
import { Loading } from "../loading/Loading"
import { selectProfile } from "../../features/user/userSlice"

export const Add = () => {

    const loading = useAppSelector(selectStoriesStateLoading)
    const created = useAppSelector(selectStoriesCreated)

    const myId = useAppSelector(selectProfile)?.id
    const myUniversityId = useAppSelector(selectProfile)?.universityId

    useEffect(() => {
        const textarea = document.querySelector('textarea');
        if (textarea === null) return
        textarea.addEventListener('input', function () {
            while (textarea.clientHeight < textarea.scrollHeight) {
                textarea.value = textarea.value.substring(0, textarea.value.length - 1);
            }
        });
    }, [])

    if (loading)
        return <Loading loading={loading} />

    if (created)
        return <p style={{ fontWeight: '2rem' }}>CREATED LOL!</p>

    return <AddContainer>
        <AddItem myId={myId!} myUniversityId={myUniversityId!} />
        <AddBackground />
    </AddContainer>
}
