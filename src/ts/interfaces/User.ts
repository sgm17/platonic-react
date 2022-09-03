export interface User {
    id: number
    username: string,
    profileImage?: string,
    sex: Sex,
    online: boolean,
    lastTimeOnline: number,
    universityId: number,
    universityParentName?: string,
    universityName: string,
    universityFaculty?: string
    universityAcronym?: string
    likesGiven: number,
    repliesGiven: number,
    totalChats: number,
    center: number[]
}

type Sex = "male" | "female"