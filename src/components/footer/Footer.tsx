import { FooterContainer, FooterCopyright, FooterCopyrightContainer, FooterDownload, FooterEmail, FooterLast, FooterLink, FooterLinks, FooterLogo, FooterLogoContainer, FooterLogoLink, FooterLogoText, FooterSection, FooterSocial, FooterSocialHeader, FooterSocialIcon, FooterWrapper } from "./FooterStyles"
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { IconContext } from 'react-icons'
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const handleClick = () => {

        let yOffset = -10
        if (window.innerWidth <= 768) { yOffset = -180 }

        if (window.location.pathname === '/') {
            const element = document.getElementById('download')

            if (element === null) return

            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ behavior: "smooth", top: y });

            return
        }

    }

    const icons = [
        { icon: <FaFacebook />, to: 'https://www.facebook.com/platonic.es1' },
        { icon: <FaInstagram />, to: 'https://www.instagram.com/platonic.es/' },
        { icon: <FaTwitter />, to: 'https://twitter.com/platonic_es' },
        { icon: <FaTiktok />, to: 'https://www.tiktok.com/@platonic.es' }
    ]

    const { t } = useTranslation()

    return <FooterSection>
        <FooterWrapper>
            <FooterContainer>
                <FooterLogoContainer>
                    <FooterLogoLink to={'/'}>
                        <FooterLogo alt="" src="images/platonic.png" />
                        <FooterLogoText>PLATONIC</FooterLogoText>
                    </FooterLogoLink>
                </FooterLogoContainer>
                <FooterEmail>hello@platonic.es</FooterEmail>
            </FooterContainer>
            <FooterContainer>
                <FooterLinks>
                    <FooterDownload onClick={handleClick}>{t('footer_download')}</FooterDownload>
                    <FooterLast>
                        <FooterLink to={'/'}>{t('footer_universities')}</FooterLink>
                    </FooterLast>
                </FooterLinks>
            </FooterContainer>
            <FooterContainer>
                <FooterSocialHeader>{t('footer_header')}</FooterSocialHeader>
                <FooterSocial>
                    <IconContext.Provider value={{ size: '2rem', color: '#fff' }}>
                        {icons.map((icon, i) => {
                            return (
                                <FooterSocialIcon
                                    key={i}
                                    href={icon.to}
                                    target="_blank">
                                    {icon.icon}
                                </FooterSocialIcon>)
                        })}
                    </IconContext.Provider>
                </FooterSocial>
            </FooterContainer>
        </FooterWrapper>
        <FooterCopyrightContainer>
            <FooterCopyright>Platonic © 2022</FooterCopyright>
        </FooterCopyrightContainer>
    </FooterSection>
}