import { AppbarContainer, AppbarItemsContainer, NavigationContainer, NavigationItem, NavigationLink, NavigationProfile } from "./AppBarStyles"
import logo from '../../assets/images/logo.png'
import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { IoIosAddCircleOutline, IoIosAddCircle } from 'react-icons/io'
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { AiOutlineMessage, AiFillMessage } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { FC, ReactElement, useState } from "react"
import { AppbarState } from "../../ts/enums/AppbarState"
import { LogoContainer, LogoImage, LogoLink, LogoText } from "../../GlobalStyles"

type AppBarProperties = {
    story: boolean
}

export const AppBar: FC<AppBarProperties> = ({ story }) => {
    const [page, setPage] = useState(AppbarState.home)

    const handleClick = (page: AppbarState) => {
        setPage(page)
    }

    return <AppbarContainer story={story}>
        <AppbarItemsContainer>
            <LogoContainer>
                <LogoLink to={'home'}>
                    <LogoImage alt="" src={logo} />
                    <LogoText color="#fff" story={story}>Platonic</LogoText>
                </LogoLink>
            </LogoContainer>
            <NavigationContainer>
                <IconContext.Provider value={{ size: '30px', color: '#000' }}>
                    {appBarItems.map((item, i) => {
                        return <NavigationItem key={i} onClick={() => handleClick(item.to)}>
                            <NavigationLink to={item.to}>
                                {page === item.to ? item.fill : item.outline}
                            </NavigationLink></NavigationItem>
                    })}
                </IconContext.Provider>
            </NavigationContainer >
        </AppbarItemsContainer>
    </AppbarContainer>
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
    }, {
        to: AppbarState.chat,
        fill: <AiFillMessage />,
        outline: <AiOutlineMessage />
    },
    {
        to: AppbarState.profile,
        fill: <NavigationProfile />,
        outline: <NavigationProfile />
    }
]

export type AppbarItemType = {
    to: AppbarState,
    fill: ReactElement,
    outline: ReactElement
}