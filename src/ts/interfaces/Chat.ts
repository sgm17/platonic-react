export interface Chat {
    username: string,
    to: number,
    profileImage: string,
    lastTime: string,
    messages: Message[]
}

interface Message {
    id: number,
    from: number,
    to: number,
    body: string
    read: boolean | null
    timestamp: number
}