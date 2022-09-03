import { Chat } from "../../ts/interfaces/Chat"

export function fetchChats(userId: number) {
    return new Promise<{ data: Chat[] }>((resolve) => {
        setTimeout(() => resolve({ data: chats }), 1000)
    })
}

const chats: Chat[] = [
    {
        to: 3,
        from: 1,
        action: {
            id: 1,
            userId: 3,
            username: 'sergigarciiaa',
            profileImage: 'https://i.pinimg.com/474x/fa/ba/54/faba5498b3167071dc93e22f3ce1e22a.jpg',
            body: 'em sembla molt interessant el que fas la veritt, nose como ho faria jo. es molt divertit aixo xd aviam com ho solociones perro jajaja . en senbla que amb el dom es pot fo',
            backgroundColor: 'cyan',
            createdAt: Date.now()
        },
        toUser: {
            id: 3,
            username: 'pepegarcia',
            profileImage: 'https://i.pinimg.com/474x/fa/ba/54/faba5498b3167071dc93e22f3ce1e22a.jpg',
            sex: 'male',
            online: false,
            lastTimeOnline: Date.now() - 100000,
            universityId: 35,
            universityParentName: 'Universitat Autònoma de Barcelona',
            universityName: 'Campus de Bellaterra',
            universityFaculty: 'Facultat de Medicina',
            universityAcronym: 'UAB',
            likesGiven: 12,
            repliesGiven: 15,
            totalChats: 15,
            center: [41.50613010080779,
                2.103939945863225]
        },
        messages: [
            {
                id: 1,
                body: 'q3f3qkkq4k4gffwerajvrjnvv nfean`vnriv `noevìnoafniniv nàf`nr`nanoivnenv  `wnìncnjdknkadsknjkjndnkvjaknvknkvdknj',
                from: 1,
                to: 3,
                read: false,
                timestamp: Date.now() - 2000000
            },
            {
                id: 2,
                body: 'anjjevndasvdv kjvnankjnjvkv jjnvaknev janvnjrenriac najjfeavjnavnrvnavjeknvk jnjkanvrvanvnñnvrvnjk njeavenjrnjrnaenvnvanjenjkrn',
                from: 1,
                to: 3,
                read: null,
                timestamp: Date.now() - 1900000
            },
            {
                id: 3,
                body: 'kewkfekm ewmkfcewkcekl kldslcemwkfemkl kmdewmdkqwwlkwklm fekwlfemw',
                from: 1,
                to: 3,
                read: null,
                timestamp: Date.now() - 1800000
            },
            {
                id: 4,
                body: 'k ew ekdkvc kew',
                from: 1,
                to: 3,
                read: null,
                timestamp: Date.now() - 1700000
            },
            {
                id: 5,
                body: 'ahahaahah okk',
                from: 3,
                to: 1,
                read: false,
                timestamp: Date.now() - 1500000
            },
            {
                id: 6,
                body: 'k ew ekdkvc kew',
                from: 1,
                to: 3,
                read: null,
                timestamp: Date.now() - 1000000
            },
            {
                id: 7,
                body: 'qkmwdwdmklwfmdmkwefml',
                from: 1,
                to: 3,
                read: null,
                timestamp: Date.now() - 500000
            },
            {
                id: 8,
                body: 'lmao wtfwevecev',
                from: 3,
                to: 1,
                read: false,
                timestamp: Date.now() - 200000
            },
            {
                id: 9,
                body: 'xewdeefcewfefewfevefe',
                from: 1,
                to: 3,
                read: null,
                timestamp: Date.now()
            },
            {
                id: 10,
                body: 'xewdeefcewfefewfevefe',
                from: 1,
                to: 3,
                read: null,
                timestamp: Date.now()
            },
            {
                id: 11,
                body: 'xewdeefcewfefewfevefe',
                from: 1,
                to: 3,
                read: null,
                timestamp: Date.now()
            },
        ]
    },
    {
        from: 1,
        to: 4,
        action: {
            id: 1,
            userId: 4,
            username: 'robert lewandoski',
            profileImage: 'https://picsum.photos/100/95',
            messagesCount: 14,
            endsAt: Date.now() + 1000000,
            startedAt: Date.now(),
            universityName: 'Campus de Bellaterra'
        },
        toUser: {
            id: 4,
            username: 'robert lewandoski',
            profileImage: 'https://picsum.photos/100/95',
            sex: 'male',
            online: true,
            lastTimeOnline: Date.now(),
            universityId: 83,
            universityParentName: "ESADE",
            universityName: "Campus Barcelona - Sant Cugat",
            likesGiven: 14,
            repliesGiven: 15,
            totalChats: 24,
            center: [
                41.46730832952267,
                2.09138082471557
            ]
        },
        messages: [
            {
                id: 12,
                body: 'wkoefekfekomwf',
                from: 4,
                to: 1,
                read: null,
                timestamp: Date.now() - 200000
            },
            {
                id: 13,
                body: 'wkoefekfekomwf',
                from: 1,
                to: 4,
                read: null,
                timestamp: Date.now()
            }
        ]
    }
]