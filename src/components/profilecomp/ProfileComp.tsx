import { ProfileCompArea, ProfileCompAvatar, ProfileCompBackground, ProfileCompContainer, ProfileCompContent, ProfileCompContentWrapper, ProfileCompData, ProfileCompEdit, ProfileCompFacultyButton, ProfileCompFacultyStudy, ProfileCompUsername, ProfileEditPopupText, ProfileEditPopupTextBorder, ProfileEditProfilePopup, ProfileEditProfilePopupBackground } from "./ProfileCompStyles"
import { useState } from "react"

export const ProfileComp = () => {

    const user = {
        username: 'sergigarcia',
        area: 'Universitat Autònoma de Barcelona',
        acronym: 'UAB',
        faculty: 'Medicine Faculty',
        study: 'Medicine',
        profileImage: 'https://avatars.dicebear.com/api/bottts/your-custom-seed.svg'
    }


    const [editProfile, setEditProfile] = useState(false)

    const handleClick = () => {
        setEditProfile(true)
    }

    function ProfileEditPopup() {
        return <ProfileEditProfilePopupBackground>
            <ProfileEditProfilePopup>
                <ProfileEditPopupTextBorder border={false}>
                    <ProfileEditPopupText>modify my current area</ProfileEditPopupText>
                </ProfileEditPopupTextBorder>
                <ProfileEditPopupTextBorder border>
                    <ProfileEditPopupText onClick={() => setEditProfile(false)}>cancel</ProfileEditPopupText>
                </ProfileEditPopupTextBorder>
            </ProfileEditProfilePopup>
        </ProfileEditProfilePopupBackground>
    }

    return <ProfileCompContainer>
        {editProfile && <ProfileEditPopup />}
        <ProfileCompBackground />
        <ProfileCompContent>
            <ProfileCompContentWrapper>
                <ProfileCompAvatar alt="" src={user.profileImage} />
                <ProfileCompData>
                    <ProfileCompUsername>{user.username}</ProfileCompUsername>
                    <ProfileCompArea>{user.area} {'('}{user.acronym}{')'}</ProfileCompArea>
                </ProfileCompData>
                <ProfileCompFacultyStudy>
                    {`${user.study}, ${user.faculty}`}
                </ProfileCompFacultyStudy>
                <ProfileCompFacultyButton>
                    <ProfileCompEdit onClick={handleClick}>
                        edit area
                    </ProfileCompEdit>
                </ProfileCompFacultyButton>
            </ProfileCompContentWrapper>
        </ProfileCompContent>
    </ProfileCompContainer>
}