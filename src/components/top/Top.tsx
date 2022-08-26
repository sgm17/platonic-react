import { TopContainer, TopProfile, TopLink, TopItem } from "./TopStyles"
import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { IoIosAddCircleOutline, IoIosAddCircle } from 'react-icons/io'
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { AiOutlineMessage, AiFillMessage } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { HomeLayoutType } from '../../App'
import { useState } from "react"

export const Top = (props: any) => {
    const items: HomeLayoutType[] = [
        {
            to: 'home',
            fill: <AiFillHome />,
            outline: <AiOutlineHome />
        },
        {
            to: 'add',
            fill: <IoIosAddCircle />,
            outline: <IoIosAddCircleOutline />,
        },
        {
            to: 'meet',
            fill: <MdOutlineFavorite />,
            outline: <MdOutlineFavoriteBorder />,
        }, {
            to: 'chat',
            fill: <AiFillMessage />,
            outline: <AiOutlineMessage />
        },
        {
            to: 'profile',
            fill: <TopProfile />,
            outline: <TopProfile />
        }
    ]

    const { select, setSelect } = props

    const handleClick = (item: HomeLayoutType, index: number) => {
        if (item.to === 'add') return
        setSelect(index)
    }

    return <TopContainer>
        <IconContext.Provider value={{ size: '30px', color: '#000' }}>
            {items.map((item, i) => {
                return <TopItem onClick={() => handleClick(item, i)}>
                    <TopLink
                        to={item.to}
                        key={i}
                    >
                        {select === items.indexOf(item) ? item.fill : item.outline}
                    </TopLink></TopItem>
            })}
        </IconContext.Provider>
    </TopContainer >
}