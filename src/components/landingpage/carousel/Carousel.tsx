import { Carousel as CarouselComponent } from 'react-responsive-carousel';
import { CarouselCard, CarouselCardAcronym, CarouselCardBody, CarouselCardCampus, CarouselCardHeader, CarouselCardUniversity, CarouselImage, CarouselItem, CarouselMap, CarouselWrapper } from './CarouselStyles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from 'react-i18next';
import uab from '../../../assets/images/uab.webp'
import mapsUab from '../../../assets/images/maps_uab.png'
import sabadell from '../../../assets/images/sabadell.jpeg'
import mapsSabadell from '../../../assets/images/maps_sabadell.png'
import mapsUb from '../../../assets/images/maps_ub.png'
import ub from '../../../assets/images/ub.jpeg'

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
                <CarouselImage alt='' src={uab} />
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
                    <CarouselMap alt='' src={mapsUab} />
                </CarouselCard>
            </CarouselItem>
            <CarouselItem>
                <CarouselImage alt='' src={sabadell} />
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
                    <CarouselMap alt='' src={mapsSabadell} />
                </CarouselCard>
            </CarouselItem>
            <CarouselItem>
                <CarouselImage alt='' src={ub} />
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
                    <CarouselMap alt='' src={mapsUb} />
                </CarouselCard>
            </CarouselItem>
        </CarouselComponent>
    </CarouselWrapper >
}