import { ReactElement } from 'react'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import './hideScrollbar.css'
import { ScrollContainer } from './ScrollStyles'
import { MeetItem } from '../meet/MeetItem'
import { StoryItem } from '../story/StoryItem'

interface ScrollValidTypes {
    children: ReactElement<typeof StoryItem>[] |
    ReactElement<typeof MeetItem>[],
    height?: string
}

export const Scroll = <T extends ScrollValidTypes>(props: T) => {
    return <ScrollMenu>
        <ScrollContainer height={props.height}>
            {props.children}
        </ScrollContainer>
    </ScrollMenu>
}