import { HomeLayoutType } from "../../App"
import { BottomContainer, BottomItem, BottomItems, BottomLink } from "./BottomStyles"
import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { IoIosAddCircleOutline, IoIosAddCircle } from 'react-icons/io'
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { AiOutlineMessage, AiFillMessage } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { TopProfile } from "../top/TopStyles"

export const Bottom = (props: any) => {
    const { select, setSelect } = props

    const handleClick = (item: HomeLayoutType, index: number) => {
        if (item.to === 'add') return
        setSelect(index)
    }

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

    return <BottomContainer>
        <BottomItems>
            <IconContext.Provider value={{ size: '30px', color: '#000' }}>
                {items.map((item, i) => {
                    return <BottomItem onClick={() => handleClick(item, i)}>
                        <BottomLink
                            to={item.to}
                            key={i}
                        >
                            {select === items.indexOf(item) ? item.fill : item.outline}
                        </BottomLink>
                    </BottomItem>
                })}
            </IconContext.Provider>
        </BottomItems>
    </BottomContainer>
}