import { UniversitiesCarouselWrapper, UniversitiesHeader, UniversitiesSection, UniversitiesSubheader, UniversitiesTextWrapper, UniversitiesWrapper } from "./UniversitiesStyles"
import { useTranslation } from 'react-i18next';
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Carousel } from "../carousel/Carousel";

export const Universities = () => {
    const { t } = useTranslation();
    const animation = useAnimation()

    const { ref, inView } = useInView({ threshold: 0.2 })

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0, opacity: 1
            });
        }
    }, [inView, animation])

    return <UniversitiesSection ref={ref}>
        <UniversitiesWrapper>
            <UniversitiesTextWrapper
                initial={{ y: 40, opacity: 0 }}
                animate={animation}
                transition={{ duration: 1 }} >
                <UniversitiesHeader>{t('universities_header')}</UniversitiesHeader>
                <UniversitiesSubheader>{t('universities_subheader')}</UniversitiesSubheader>
            </UniversitiesTextWrapper>
            <UniversitiesCarouselWrapper
                initial={{ y: -40, opacity: 0 }}
                animate={animation}
                transition={{ duration: 1 }} >
                <Carousel />
            </UniversitiesCarouselWrapper>
        </UniversitiesWrapper>
    </UniversitiesSection>
}
