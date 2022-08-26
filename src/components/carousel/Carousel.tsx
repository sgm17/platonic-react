import { Carousel as CarouselComponent } from 'react-responsive-carousel';
import { CarouselCard, CarouselCardAcronym, CarouselCardBody, CarouselCardCampus, CarouselCardHeader, CarouselCardUniversity, CarouselImage, CarouselItem, CarouselMap, CarouselWrapper } from './CarouselStyles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from 'react-i18next';

const CarouselProps = {
    showThumbs: false,
    showStatus: false,
    useKeyboardArrows: true,
    infiniteLoop: true,
    autoPlay: true,
    stopOnHover: true,
    emulateTouch: true,
    transitionTime: 500,
    showArrows: false,
    showIndicators: false
}

export const Carousel = () => {
    const { t } = useTranslation();

    return <CarouselWrapper>
        <CarouselComponent {...CarouselProps}>
            <CarouselItem>
                <CarouselImage alt='' src='images/uab.webp' />
                <CarouselCard>
                    <CarouselCardHeader>
                        <CarouselCardUniversity>
                            {t('carousel_university_uab')}
                        </CarouselCardUniversity>
                        <CarouselCardAcronym>
                            {t('carousel_acronym_uab')}
                        </CarouselCardAcronym>
                    </CarouselCardHeader>
                    <CarouselCardCampus>
                        {t('carousel_campus_uab')}
                    </CarouselCardCampus>
                    <CarouselCardBody>
                        {t('carousel_body_uab')}
                    </CarouselCardBody>
                    <CarouselMap alt='' src='images/maps_uab.png' />
                </CarouselCard>
            </CarouselItem>
            <CarouselItem>
                <CarouselImage alt='' src='images/sabadell.jpeg' />
                <CarouselCard>
                    <CarouselCardHeader>
                        <CarouselCardUniversity>
                            {t('carousel_university_uab')}
                        </CarouselCardUniversity>
                        <CarouselCardAcronym>
                            {t('carousel_acronym_uab')}
                        </CarouselCardAcronym>
                    </CarouselCardHeader>
                    <CarouselCardCampus>
                        {t('carousel_campus_sabadell')}
                    </CarouselCardCampus>
                    <CarouselCardBody>
                        {t('carousel_body_sabadell')}
                    </CarouselCardBody>
                    <CarouselMap alt='' src='images/maps_sabadell.png' />
                </CarouselCard>
            </CarouselItem>
            <CarouselItem>
                <CarouselImage alt='' src='images/ub.jpeg' />
                <CarouselCard>
                    <CarouselCardHeader>
                        <CarouselCardUniversity>
                            {t('carousel_university_ub')}
                        </CarouselCardUniversity>
                        <CarouselCardAcronym>
                            {t('carousel_acronym_ub')}
                        </CarouselCardAcronym>
                    </CarouselCardHeader>
                    <CarouselCardCampus>
                        {t('carousel_campus_ub')}
                    </CarouselCardCampus>
                    <CarouselCardBody>
                        {t('carousel_body_ub')}
                    </CarouselCardBody>
                    <CarouselMap alt='' src='images/maps_ub.png' />
                </CarouselCard>
            </CarouselItem>
        </CarouselComponent>
    </CarouselWrapper >
}