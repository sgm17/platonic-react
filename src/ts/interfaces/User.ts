export interface User {
    id: number
    username: string,
    profileImage?: string,
    sex: Sex,
    lastTimeOnline: string,
    universityId: number,
    universityParentName: string,
    universityName: string,
    universityAcronym: string
}

type Sex = "male" | "female"