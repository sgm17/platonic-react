export interface Meet {
    id: number,
    userId: number,
    username: string,
    profileImage?: string,
    messagesCount: number,
    endsAt: number,
    startedAt: number
    universityParentName?: string,
    universityAcronym?: string,
    universityName: string,
    universityFaculty?: string
}