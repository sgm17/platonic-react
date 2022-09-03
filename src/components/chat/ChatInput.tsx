import { FiSend } from "react-icons/fi"
import { ChatInputContainer, ChatInputSend, ChatInputText, } from "./ChatInputStyles"

export const ChatInput = () => {
    return <ChatInputContainer>
        <ChatInputText />
        <ChatInputSend>
            <FiSend size={'25px'} color={'#000'} />
        </ChatInputSend>
    </ChatInputContainer>
}