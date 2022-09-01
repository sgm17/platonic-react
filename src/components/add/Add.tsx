import { AddContainer, AddBackground } from "./AddStyles"
import { useEffect, useState } from "react"
import { AddItem } from "./AddItem"
import { useAppSelector } from "../../app/hooks"
import { selectStoriesCreated, selectStoriesStateLoading } from "../../features/story/storySlice"
import ClipLoader from "react-spinners/ClipLoader"

export const Add = () => {

    const loading = useAppSelector(selectStoriesStateLoading)
    const created = useAppSelector(selectStoriesCreated)

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
        return <div style={{ height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <ClipLoader loading={loading} color='#000' size={'150px'} />
        </div>

    if (created)
        return <p style={{ fontWeight: '2rem' }}>CREATED LOL!</p>

    return <AddContainer>
        <AddItem />
        <AddBackground />
    </AddContainer>
}
