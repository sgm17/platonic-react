import { FC } from "react";
import { WithSeeMore } from "react-insta-stories";
import { Action, Story } from "react-insta-stories/dist/interfaces";
import { Story as UniversityStory } from "../../ts/interfaces/Story";
import { University } from "../../ts/interfaces/University";
import { InstaStoryItemBackground, InstaStoryItemBody } from "./InstaStoryStyles";
import { InstaStoryWithHeader } from "./InstaStoryWithHeader";


type InstaStoryItemProperties = {
    props: {
        action: Action;
        isPaused: boolean;
        story: Story;
        config: {
            width?: NumberOrString | undefined;
            height?: NumberOrString | undefined;
            loader?: JSX.Element | undefined;
            header?: Function | undefined;
            storyStyles?: Object | undefined;
        }
    },
    universityStory: UniversityStory,
    university?: University,
    myId: number
}

type NumberOrString = number | string


export const InstaStoryItem: FC<InstaStoryItemProperties> = ({ props, universityStory, university, myId }) => {
    return <>
        <InstaStoryWithHeader
            story={universityStory}
            university={university}
            action={props.action}
            isPaused={props.isPaused}
            myId={myId} />
        <InstaStoryItemBackground background={universityStory.backgroundColor}>
            <InstaStoryItemBody>{universityStory.body}</InstaStoryItemBody>
        </InstaStoryItemBackground>
        <WithSeeMore story={props.story} action={props.action} />
    </>
}