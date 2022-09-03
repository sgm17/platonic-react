import { Meet } from "./Meet"
import { Story } from "./Story"
import { User } from "./User"

export interface Chat {
    from: number,
    to: number,
    toUser: User
    messages: Message[],
    action: Action
}

export interface Message {
    id: number,
    from: number,
    to: number,
    body: string
    read: boolean | null
    timestamp: number
}

export type Action = Story | Meet