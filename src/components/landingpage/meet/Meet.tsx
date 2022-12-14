import { HowHeader, HowImage, HowSection, HowSpan, HowStart, HowTextWrapper, HowWrapper, HowSubheader, HowStartLink } from "./MeetStyles"
import { useTranslation } from 'react-i18next';
import how from '../../../assets/images/how.webp'

export const How = () => {
    const { t } = useTranslation();

    return <HowSection>
        <HowWrapper>
            <HowTextWrapper
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <HowHeader>
                    {t('how_header')}
                </HowHeader>
                <HowSubheader>
                    {t('how_subheader')}
                </HowSubheader>
                <HowSpan>
                    {t('how_span')}
                </HowSpan>
                <HowStartLink to={'/login'}>
                    <HowStart>
                        {t('how_start')}
                    </HowStart>
                </HowStartLink>
            </HowTextWrapper>
            <HowImage src={how} alt=""
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }} />
        </HowWrapper>
    </HowSection>
}
