import { StoriesContainer, StoryAccountName, StoryContainer, StoryProfileContainer, StoryProfileIcon } from "./StoryStyles"
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import './hideScrollbar.css'
import { useState } from "react";

export const Story = (props: any) => {
    const profileImage = 'https://i.pravatar.cc/150?img=2'

    const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

    const { story, setStory } = props

    return (
        <ScrollMenu>
            <StoriesContainer>
                {items.map((a, i) => {
                    const last = i === items[items.length - 1]
                    return <StoryCard
                        key={i}
                        onClick={() => setStory(i)}
                        profileImage={profileImage}
                        first={i === items[0]} last={last}
                    />
                })
                }
            </StoriesContainer>
        </ScrollMenu>
    )
}

const StoryCard = (props: any) => {
    const { profileImage, onClick, first, last } = props

    return <StoryContainer first={first} last={last}>
        <StoryProfileContainer onClick={onClick}>
            <StoryProfileIcon alt='' src={profileImage} />
        </StoryProfileContainer>
        <StoryAccountName>sergigarciiaa</StoryAccountName>
    </StoryContainer>
}