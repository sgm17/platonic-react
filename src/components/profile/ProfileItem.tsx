import { ChangeEvent, FC, useState } from "react"
import { User } from "../../ts/interfaces/User"
import { ProfileItemUniversityText, ProfileItemContainer, ProfileItemContent, ProfileItemContentContainer, ProfileItemContentWrapper, ProfileItemImage, ProfileItemImageContainer, ProfileItemUniversityContent, ProfileItemUsername, ProfileItemStatsContainer, ProfileItemStatsItem, ProfileItemStatsText, ProfileItemEditButton, ProfileItemMessageButton, ProfileItemEdit, ProfileItemEditInput, ProfileItemUniversityFacultyInput } from "./ProfileItemStyles"
import defaultProfile from '../../assets/images/defaultprofile.jpg'
import { HiCamera } from 'react-icons/hi'
import { useAppSelector } from "../../app/hooks"

type ProfileItemProperties = {
    user: User
}

export const ProfileItem: FC<ProfileItemProperties> = ({ user }) => {

    const [edit, setEdit] = useState(false)
    const [image, setImage] = useState<File | undefined>()
    const [faculty, setFaculty] = useState(user.universityFaculty)

    const universityName = user.universityParentName !== undefined ?
        `${user.universityParentName} ${user.universityAcronym !== undefined ? `(${user.universityAcronym}), ` : ', '} ${user.universityName}` :
        `${user.universityName} ${user.universityAcronym !== undefined ? `(${user.universityAcronym})` : ''}`


    const isMe = true

    const handleClick = () => {
        setEdit(!edit)
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files

        if (files === null) return

        const file = files[0]

        if (file === null) return

        setImage(file)
    }

    return <ProfileItemContainer>
        <ProfileItemContentWrapper>
            <ProfileItemImageContainer>
                {edit && <ProfileItemEdit>
                    <HiCamera size={'30px'} color={'#000'} />
                    <ProfileItemEditInput type={"file"} placeholder='' onChange={(e) => handleFileChange(e)} />
                </ProfileItemEdit>}
                <ProfileItemImage alt="" src={user.profileImage ?? defaultProfile} />
            </ProfileItemImageContainer>
            <ProfileItemContentContainer>
                <ProfileItemContent>
                    <ProfileItemUsername>{`@${user.username}`}</ProfileItemUsername>
                    <ProfileItemUniversityContent>
                        <ProfileItemUniversityText>{universityName}</ProfileItemUniversityText>
                        <ProfileItemUniversityFacultyInput disabled={!edit} value={faculty} onChange={(e) => setFaculty(e.target.value)} />
                    </ProfileItemUniversityContent>
                    <ProfileItemStatsContainer>
                        <ProfileItemStatsItem>
                            <ProfileItemStatsText stateNumber>{user.likesGiven}</ProfileItemStatsText>
                            <ProfileItemStatsText>likes given</ProfileItemStatsText>
                        </ProfileItemStatsItem>
                        <ProfileItemStatsItem>
                            <ProfileItemStatsText stateNumber>{user.totalChats}</ProfileItemStatsText>
                            <ProfileItemStatsText>total chats</ProfileItemStatsText>
                        </ProfileItemStatsItem>
                        <ProfileItemStatsItem>
                            <ProfileItemStatsText stateNumber>{user.repliesGiven}</ProfileItemStatsText>
                            <ProfileItemStatsText>replies given</ProfileItemStatsText>
                        </ProfileItemStatsItem>
                    </ProfileItemStatsContainer>
                    {isMe ? <ProfileItemEditButton onClick={handleClick}>{edit ? 'save profile' : 'edit profile'}</ProfileItemEditButton>
                        : <ProfileItemMessageButton>send message</ProfileItemMessageButton>}
                </ProfileItemContent>
            </ProfileItemContentContainer>
        </ProfileItemContentWrapper>
    </ProfileItemContainer >
}