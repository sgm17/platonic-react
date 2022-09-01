import { FC } from "react"
import { InputBackground, InputContainer } from "./InputStyles"

export const Input: FC<InputProperties> = ({ disabled }) => {
    return <InputBackground>
        <InputContainer>
            aaaa
        </InputContainer>
    </InputBackground>
}

type InputProperties = {
    disabled: boolean
}