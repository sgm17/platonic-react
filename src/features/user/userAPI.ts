import { User } from "../../ts/interfaces/User"

export const fetchProfile = (token: string) => {
    return new Promise<{ data: { user: User } }>((resolve, reject) => {
        return resolve({
            data: { user: user }
        })
    })
}

const user: User = {
    id: 1,
    username: "sergigarciiaa",
    sex: "male",
    lastTimeOnline: Date.now(),
    universityId: 35,
    universityName: "Campus de Bellaterra",
    universityParentName: "Universitat Autònoma de Barcelona",
    universityAcronym: "UAB",
    universityFaculty: "Facultat de medicina",
    likesGiven: 100,
    repliesGiven: 200,
    totalChats: 300,
    online: true,
    center: [
        41.50613010080779,
        2.103939945863225
    ]
}