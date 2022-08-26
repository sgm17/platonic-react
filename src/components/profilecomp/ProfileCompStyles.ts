import styled from "styled-components";

export const ProfileCompContainer = styled.div`
    padding-top: 60px;
    width: 100%;
    height: calc(100vh - 60px);
`

export const ProfileCompBackground = styled.div`
    height: 50vh;
    background: #E22F2F;
    width: 100%;

    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
`

export const ProfileCompContent = styled.div`
    height: 100%;
    width: 100%;
    padding: 100px 2rem 0 2rem;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
`

export const ProfileCompContentWrapper = styled.div`
    background: #fff;
    border-radius: 8px;
    height: 100%;
`

export const ProfileCompAvatar = styled.img`
    height: 90px;
    width: 90px;
    border-radius: 50%;
    border: 3px solid #fff;
    position: absolute;
    top: calc(100px + 60px - 45px);

    left: 50%;
    transform: translateX(-50%);

    background: #E22F2F;
    z-index: 1;
`

export const ProfileCompData = styled.div`
    padding-top: 60px;
`

export const ProfileCompUsername = styled.h1`
    text-align: center;
    font-size: 1.5rem;
    font-weight: BOLD;
`

export const ProfileCompArea = styled.h2`
    text-align: center;
    font-size: 1.15rem;
    font-weight: 500;
    color: gray;
    padding-top: 1rem;
`


export const ProfileCompFacultyStudy = styled.p`
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    color: gray;

    padding: 1rem;
`

export const ProfileCompFacultyButton = styled.div`
    padding: 0 1rem;

    @media screen and (min-width: 768px){
     padding: 0 10rem;
    }
`

export const ProfileCompEdit = styled.button`
    border: none;
    width: 100%;
    padding: 0.7rem;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    border-radius: 6px;
    cursor: pointer;
`

export const ProfileEditProfilePopupBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.7);
    position: fixed;
    z-index: 2;
`

export const ProfileEditProfilePopup = styled.div`
    width: 642px;
    transform: translate(-50%, -50%);
    bottom: 50%;
    left: 50%;
    position: absolute;
`

export const ProfileEditPopupText = styled.p`
    font-weight: 500;
    font-size: 1.25rem;
    text-align: center;
`

export const ProfileEditPopupTextBorder = styled.div<{ border: boolean }>`
    width: 100%;
    padding: 1rem 10px;
    background-color: #fff;
    cursor: pointer;

    &:hover{
        background-color: whitesmoke;
    }

    ${({ border }) => {
        if (border) return 'border-top: 1px solid gray';
    }}
`