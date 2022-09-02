import { FC, useState } from "react"
import { AiOutlineEye } from "react-icons/ai"
import { MdKeyboardArrowUp, MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md"
import { Action } from "react-insta-stories/dist/interfaces"
import { myId } from "./InstaStoryUniversity"
import { InstaStorySeeMoreCollapsed, InstaStorySeeMoreCollapsedContainer, InstaStorySeeMoreCollapsedText, InstaStorySeeMoreCollapsedFavourite, InstaStorySeeMoreCollapsedOwner, InstaStorySeeMoreCollapsedOwnerItemContainer, InstaStorySeeMoreCollapsedOwnerIcon, InstaStorySeeMoreCollapsedOwnerText } from "./InstaStoryStyles"

type InstaSeeMoreCollapsedProperties = {
    action: Action
    toggleMore: (show: boolean) => void,
    storyUserId: number
}

export const InstaSeeMoreCollapsed: FC<InstaSeeMoreCollapsedProperties> = ({ toggleMore, action, storyUserId }) => {
    const [favourite, setFavourite] = useState(false)
    const isMe = myId === storyUserId

    const handleClick = () => {
        action('pause')
        toggleMore(true)
    }

    const handleFavourite = () => {
        setFavourite(!favourite)
    }

    if (isMe)
        return <InstaStorySeeMoreCollapsedOwner>
            <InstaStorySeeMoreCollapsedOwnerItemContainer>
                <InstaStorySeeMoreCollapsedOwnerIcon>
                    <AiOutlineEye size={'25px'} color={'#fff'} />
                </InstaStorySeeMoreCollapsedOwnerIcon>
                <InstaStorySeeMoreCollapsedOwnerText>
                    153 views
                </InstaStorySeeMoreCollapsedOwnerText>
            </InstaStorySeeMoreCollapsedOwnerItemContainer>
            <InstaStorySeeMoreCollapsedOwnerItemContainer padding="10px">
                <InstaStorySeeMoreCollapsedOwnerIcon>
                    <MdOutlineFavoriteBorder size={'25px'} color={'#fff'} />
                </InstaStorySeeMoreCollapsedOwnerIcon>
                <InstaStorySeeMoreCollapsedOwnerText>
                    12 favourites
                </InstaStorySeeMoreCollapsedOwnerText>
            </InstaStorySeeMoreCollapsedOwnerItemContainer>
        </InstaStorySeeMoreCollapsedOwner>

    return <InstaStorySeeMoreCollapsed>
        <InstaStorySeeMoreCollapsedContainer>
            <MdKeyboardArrowUp size={'30px'} color={'#fff'} />
            <InstaStorySeeMoreCollapsedText onClick={handleClick}>send a dm</InstaStorySeeMoreCollapsedText>
        </InstaStorySeeMoreCollapsedContainer>
        <InstaStorySeeMoreCollapsedFavourite>
            {!favourite ? <MdOutlineFavoriteBorder size={'30px'} color={'#fff'} onClick={handleFavourite} /> :
                <MdOutlineFavorite size={'30px'} color={'red'} onClick={handleFavourite} />}
        </InstaStorySeeMoreCollapsedFavourite>
    </InstaStorySeeMoreCollapsed>
}