import { Meet } from "../../ts/interfaces/MeetItem";

export function fetchMeets(userId: number) {
    return new Promise<{ data: Meet[] }>((resolve) => {
        setTimeout(() => resolve({ data: meets }), 1000);
    })
}

const meets: Meet[] = [
    {
        id: 1,
        userId: 2,
        username: 'laura',
        profileImage: 'https://picsum.photos/100/100',
        messagesCount: 13,
        endsAt: Date.now() + 172800000,
        startedAt: Date.now(),
        universityParentName: 'Universitat Autònoma de Barcelona',
        universityName: 'Campus de Bellaterra',
        universityAcronym: 'UAB',
        universityFaculty: 'Facultat de Medicina'
    },
    {
        id: 2,
        userId: 3,
        username: 'Pep',
        profileImage: 'https://picsum.photos/100/100',
        messagesCount: 1,
        endsAt: Date.now() + 172800000 / 2,
        startedAt: Date.now(),
        universityParentName: 'Universitat Politècnica de Catalunya',
        universityName: 'Campus de Sant Cugat del Vallès',
        universityAcronym: 'UPC',
        universityFaculty: "Facultat d'Enginyeria"
    },
    {
        id: 3,
        userId: 4,
        username: 'Maria',
        profileImage: 'https://picsum.photos/100/100',
        messagesCount: 14,
        endsAt: Date.now() + 60000,
        startedAt: Date.now(),
        universityName: 'Universitat de Girona'
    }
]