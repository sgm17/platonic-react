import { AppbarContainer, AppbarItemsContainer, AppbarLogoText, AppbarNavigationContainer, AppbarNavigationItem, AppbarNavigationLink, AppbarProfileImage, AppbarProfileImageContainer } from "./AppBarStyles"
import logo from '../../assets/images/logo.png'
import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { IoIosAddCircleOutline, IoIosAddCircle } from 'react-icons/io'
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { AiOutlineMessage, AiFillMessage } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { FC, ReactElement, useState, useEffect } from "react"
import { AppbarState } from "../../ts/enums/AppbarState"
import { LogoContainer, LogoImage, LogoLink, LogoText } from "../../GlobalStyles"
import { useLocation } from "react-router-dom"

type AppBarProperties = {
    story: boolean
}

export const AppBar: FC<AppBarProperties> = ({ story }) => {
    const [page, setPage] = useState<AppbarState>(AppbarState.home)

    const location = useLocation()

    useEffect(() => {
        const path = location.pathname.split('/')[1]
        const appbarState = appBarItems.find((el) => el.to === path as AppbarState)
        if (appbarState === undefined) return

        setPage(appbarState.to)
    }, [location])

    return <AppbarContainer story={story}>
        <AppbarItemsContainer>
            <LogoContainer>
                <LogoLink to={'home'}>
                    <LogoImage alt="" src={logo} />
                    <AppbarLogoText color="#fff" story={story}>Platonic</AppbarLogoText>
                </LogoLink>
            </LogoContainer>
            <AppbarNavigationContainer story={story}>
                <IconContext.Provider value={{ size: '30px', color: '#000' }}>
                    {appBarItems.map((item, i) => {
                        return <AppbarNavigationItem key={i}>
                            <AppbarNavigationLink to={item.to}>
                                {item.to !== AppbarState.profile
                                    ? page === item.to ? item.fill : item.outline
                                    : <AppbarProfileImageContainer page={page === AppbarState.profile}>
                                        <AppbarProfileImage alt="" src="https://avatarfiles.alphacoders.com/165/thumb-165945.jpg" />
                                    </AppbarProfileImageContainer>}
                            </AppbarNavigationLink>
                        </AppbarNavigationItem>
                    })}
                </IconContext.Provider>
            </AppbarNavigationContainer >
        </AppbarItemsContainer>
    </AppbarContainer>
}

export type AppbarItemType = {
    to: AppbarState,
    fill?: ReactElement,
    outline?: ReactElement
}

const appBarItems: AppbarItemType[] = [
    {
        to: AppbarState.home,
        fill: <AiFillHome />,
        outline: <AiOutlineHome />
    },
    {
        to: AppbarState.create,
        fill: <IoIosAddCircle />,
        outline: <IoIosAddCircleOutline />,
    },
    {
        to: AppbarState.meet,
        fill: <MdOutlineFavorite />,
        outline: <MdOutlineFavoriteBorder />,
    },
    {
        to: AppbarState.chat,
        fill: <AiFillMessage />,
        outline: <AiOutlineMessage />
    },
    {
        to: AppbarState.profile
    }
]