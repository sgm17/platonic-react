import { useAnimation } from "framer-motion"
import { useEffect, } from "react"
import { MeetWhatBody, MeetWhatContainer, MeetWhatHeader, WhatMeetImage, MeetWhatImagesContainer, MeetWhatButton, MeetWhatSubheader, MeetWhatVerticalImagesContainer, MeetWhatContent, WhatMeetImageContainer } from "./MeetWhatStyles"
import { useInView } from "react-intersection-observer"
import flirt1 from '../../assets/images/flirt1.jpg'
import flirt2 from '../../assets/images/flirt2.jpg'
import flirt3 from '../../assets/images/flirt3.jpg'
import { useAppDispatch } from "../../app/hooks"
import { retrieveMeets } from "../../features/meet/meetSlice"
import { myId } from "../instastory/InstaStory"

export const MeetWhat = () => {
    const animation = useAnimation()
    const dispatch = useAppDispatch()

    const { ref, inView } = useInView({ threshold: 0.2 })

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0, opacity: 1
            });
        }
    }, [inView, animation])


    useEffect(() => {
        dispatch(retrieveMeets(myId))
    }, [dispatch])

    return <MeetWhatContainer ref={ref}>
        <MeetWhatContent
            initial={{ x: -40, opacity: 0 }}
            animate={animation}
            transition={{ duration: 1 }}>
            <MeetWhatHeader>what is meet?</MeetWhatHeader>
            <MeetWhatSubheader>meet random people in your area.</MeetWhatSubheader>
            <MeetWhatBody>get to know the other person beyond their physique for 2 days. discover
                who studies, their tastes and ambitions. you will start with a point
                in common: you will both study at the same university.</MeetWhatBody>
            <MeetWhatButton>start meeting</MeetWhatButton>
        </MeetWhatContent>
        <MeetWhatImagesContainer
            initial={{ x: 40, opacity: 0 }}
            animate={animation}
            transition={{ duration: 1 }}>
            <MeetWhatVerticalImagesContainer>
                <WhatMeetImage alt="" src={flirt1} />
                <WhatMeetImageContainer>
                    <WhatMeetImage alt="" src={flirt2} />
                </WhatMeetImageContainer>
            </MeetWhatVerticalImagesContainer>
            <WhatMeetImage alt="" src={flirt3} />
        </MeetWhatImagesContainer>
    </MeetWhatContainer>
}