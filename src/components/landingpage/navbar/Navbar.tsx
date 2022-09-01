import { Header, NavbarLogoContainer, NavbarLogoImage, NavbarLogoLink, NavbarLogoText, NavItems, NavItem, NavItemLink, Nav, NavMobile, NavButton, NavMobileClose } from "./NavbarStyles"
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../../assets/images/logo.png'

export const Navbar = () => {
    const { t } = useTranslation();

    const [button, setButton] = useState(false)
    const handleButton = () => setButton(!button)

    return <Header>
        <NavbarLogoContainer>
            <NavbarLogoLink to={'/'}>
                <NavbarLogoImage src={logo} alt='' />
                <NavbarLogoText>Platonic</NavbarLogoText>
            </NavbarLogoLink>
        </NavbarLogoContainer>
        <Nav>
            <NavItems click={button}>
                <NavItem click={button}>
                    <NavItemLink to={'/'}>
                        {t('navbar_how')}
                    </NavItemLink>
                </NavItem>
                <NavItem click={button}>
                    <NavItemLink to={'/universities'}>
                        {t('navbar_universities')}
                    </NavItemLink>
                </NavItem>
                <NavLink to={'/login'}>
                    <NavButton>{t('navbar_button')}</NavButton>
                </NavLink>
                {!button ? < NavMobile onClick={handleButton} />
                    : <NavMobileClose onClick={handleButton} />}
            </NavItems>
        </Nav>
    </Header>
}