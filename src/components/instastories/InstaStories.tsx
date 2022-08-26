import React, { useEffect, useState } from 'react';
import Stories, { WithHeader, WithSeeMore } from 'react-insta-stories';
import { Action, Header, Renderer, Story } from 'react-insta-stories/dist/interfaces';
import { InstaStoriesContainer, InstaStoriesWrapper, } from './InstaStoriesStyles';

export const InstaStories = () => {
    const [currentId, setCurrentId] = useState(0)

    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return <InstaStoriesContainer>
        <InstaStoriesWrapper
            height={'100vh'}
            width={width <= 600 ? '100%' : undefined}
            currentIndex={currentId}
            defaultInterval={3000}
            // onStoryEnd={(s: any, st: any) => {
            //     // console.log('story ended', s, st);
            //     setCurrentId(currentId => currentId + 1);
            // }}
            // onAllStoriesEnd={(s: any, st: any) => {
            //     // console.log('all stories ended', s, st);
            //     setCurrentId(currentId => 0);
            // }}
            // onStoryStart={(s: any, st: any) => {
            //     // console.log('story started', s, st);
            //     setCurrentId(currentId => s)
            // }}
            stories={[
                {
                    content: ({ action, story }) => {
                        console.log(action)
                        return <div style={{ backgroundColor: 'blue', height: '100%' }}>
                            {story.header && <WithHeader story={story} globalHeader={() => InstaStoryHeader(story.header)} />}
                            <div>
                                <h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
                                <h1 style={{ marginTop: 5 }}>We have our good old image and video stories, just the same.</h1>
                            </div>
                            {story.seeMore && <WithSeeMore story={story} action={action} />}
                        </div>
                    },
                    header: {
                        heading: 'Mohit Karekar',
                        subheading: 'Posted 30m ago',
                        profileImage: 'https://picsum.photos/100/100',
                    },
                    seeMoreCollapsed: ({ toggleMore, action }) => {
                        return <div onClick={() => { action('pause'); toggleMore(true) }} style={{ paddingBottom: '00px' }}>CHECK THIS BITCH</div>
                    },
                    seeMore: () => {
                        return <div>NOSTALE EL MEJOR</div>
                    }
                },
                {
                    content: ({ action, story }) => {
                        return <>
                            <WithSeeMore story={story} action={action} />
                            <div style={{ background: 'snow', padding: 20, height: '100%' }} >
                                <h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
                                <h1 style={{ marginTop: 5 }}>We have our good old image and video stories, just the same.</h1>
                            </div>
                        </>
                    },
                    header: {
                        heading: 'Mohit Karekar',
                        subheading: 'Posted 30m ago',
                        profileImage: 'https://picsum.photos/100/100',
                    }
                },
            ]} />
    </InstaStoriesContainer>
}

const InstaStoryHeader: Function = ({ profileImage, heading, subheading }: Header) => {
    return <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}>
        <img alt='' src={profileImage}></img>
        <div>
            {heading} - {subheading}
        </div>
    </div>
}