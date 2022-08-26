import { useAnimation } from "framer-motion"
import { useEffect, } from "react"
import { WhatMeetBody, WhatMeetContainer, WhatMeetContent, WhatMeetHeader, WhatMeetImage, WhatMeetImages, WhatMeetStart, WhatMeetSubheader, WhatMeetVertical } from "./WhatMeetStyles"
import { useInView } from "react-intersection-observer"

export const WhatMeet = (props: any) => {
    const { setMeet } = props
    const animation = useAnimation()

    const { ref, inView } = useInView({ threshold: 0.2 })

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0, opacity: 1
            });
        }
    }, [inView, animation])

    const handleClick = () => {
        setMeet(true)
    }


    return <WhatMeetContainer ref={ref}>
        <WhatMeetContent initial={{ x: -40, opacity: 0 }}
            animate={animation}
            transition={{ duration: 1 }}>
            <WhatMeetHeader>what is meet?</WhatMeetHeader>
            <WhatMeetSubheader>meet random people in your area.</WhatMeetSubheader>
            <WhatMeetBody>get to know the other person beyond their physique for 2 days. discover
                who studies, their tastes and ambitions. you will start with a point
                in common: you will both study at the same university.</WhatMeetBody>
            <WhatMeetStart onClick={handleClick}>start meeting</WhatMeetStart>
        </WhatMeetContent>
        <WhatMeetImages
            initial={{ x: 40, opacity: 0 }}
            animate={animation}
            transition={{ duration: 1 }}>
            <WhatMeetVertical>
                <WhatMeetImage alt="" src="images/flirt1.jpg" />
                <div style={{ paddingTop: '1rem' }}>
                    <WhatMeetImage alt="" src="images/flirt2.jpg" />
                </div>
            </WhatMeetVertical>
            <WhatMeetImage alt="" src="images/flirt3.jpg" />
        </WhatMeetImages>
    </WhatMeetContainer>
}