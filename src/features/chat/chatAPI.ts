import { Chat } from "../../ts/interfaces/Chat"

export function fetchChats(userId: number) {
    return new Promise<{ data: Chat[] }>((resolve) => {
        setTimeout(() => resolve({ data: chats }), 1000)
    })
}

const myId = 2
const joanId = 3
const lewandoskiId = 4

const chats: Chat[] = [
    {
        username: 'joangarcia',
        to: 3,
        lastTime: '30min',
        profileImage: 'https://picsum.photos/100/100',
        messages: [
            {
                id: 1,
                body: 'q3f3qkkq4k4gffwerajvrjnvv nfean`vnriv `noevìnoafniniv nàf`nr`nanoivnenv  `wnìncnjdknkadsknjkjndnkvjaknvknkvdknj',
                from: myId,
                to: joanId,
                read: false,
                timestamp: Date.now() - 2000000
            },
            {
                id: 2,
                body: 'anjjevndasvdv kjvnankjnjvkv jjnvaknev janvnjrenriac najjfeavjnavnrvnavjeknvk jnjkanvrvanvnñnvrvnjk njeavenjrnjrnaenvnvanjenjkrn',
                from: myId,
                to: joanId,
                read: null,
                timestamp: Date.now() - 1900000
            },
            {
                id: 3,
                body: 'kewkfekm ewmkfcewkcekl kldslcemwkfemkl kmdewmdkqwwlkwklm fekwlfemw',
                from: myId,
                to: joanId,
                read: null,
                timestamp: Date.now() - 1800000
            },
            {
                id: 4,
                body: 'k ew ekdkvc kew',
                from: myId,
                to: joanId,
                read: null,
                timestamp: Date.now() - 1700000
            },
            {
                id: 5,
                body: 'ahahaahah okk',
                from: joanId,
                to: myId,
                read: false,
                timestamp: Date.now() - 1500000
            },
            {
                id: 6,
                body: 'k ew ekdkvc kew',
                from: myId,
                to: joanId,
                read: null,
                timestamp: Date.now() - 1000000
            },
            {
                id: 7,
                body: 'qkmwdwdmklwfmdmkwefml',
                from: myId,
                to: joanId,
                read: null,
                timestamp: Date.now() - 500000
            },
            {
                id: 8,
                body: 'lmao wtfwevecev',
                from: joanId,
                to: myId,
                read: false,
                timestamp: Date.now() - 200000
            },
            {
                id: 9,
                body: 'xewdeefcewfefewfevefe',
                from: myId,
                to: joanId,
                read: null,
                timestamp: Date.now()
            },
            {
                id: 10,
                body: 'xewdeefcewfefewfevefe',
                from: myId,
                to: joanId,
                read: null,
                timestamp: Date.now()
            },
            {
                id: 11,
                body: 'xewdeefcewfefewfevefe',
                from: myId,
                to: joanId,
                read: null,
                timestamp: Date.now()
            },
        ]
    },
    {
        username: 'robert lewandoski',
        to: lewandoskiId,
        profileImage: 'https://picsum.photos/100/95',
        lastTime: '20min',
        messages: [
            {
                id: 12,
                body: 'wkoefekfekomwf',
                from: lewandoskiId,
                to: myId,
                read: null,
                timestamp: Date.now() - 200000
            },
            {
                id: 13,
                body: 'wkoefekfekomwf',
                from: myId,
                to: lewandoskiId,
                read: null,
                timestamp: Date.now()
            }
        ]
    }
]