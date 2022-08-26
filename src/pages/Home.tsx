import { useRef } from "react"
import { HomePopup } from "../components/homepopup/HomePopup"
import { InstaStories } from "../components/instastories/InstaStories"
import { MeetBar } from "../components/meetbar/MeetBar"
import { MeetBarItem } from "../components/meetbar/MeetBarStyles"
import { Story } from "../components/story/Story"

export const Home = (props: any) => {
    const { popup, setPopup, story, setStory } = props
    const homeRef = useRef(null)

    if (story)
        return <InstaStories />

    return <div ref={homeRef} style={{ padding: '60px 0' }}>
        <Story story={story} setStory={setStory} />
        <MeetBar />
        {popup && <HomePopup />}
    </div>
}