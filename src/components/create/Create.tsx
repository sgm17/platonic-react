import { CreateBackgroundPicker, CreateButton, CreateButtonContainer, CreateCloseContainer, CreateContainer, CreateInput, CreateInputContainer, CreateStory, CreateTypeText, CreateTypeTextContainer, CreateTypeTextText } from "./CreateStyles"
import { AiOutlineClose } from 'react-icons/ai'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Create = () => {
    const [backgroundColor, setBackgroundColor] = useState(['blue', 'red', 'orange', 'pink', 'purple', 'gray', 'brown', 'yellow'])
    const [select, setSelect] = useState(0)
    const [text, setText] = useState('')
    const navigate = useNavigate();

    const handleClick = () => {
        if (select === backgroundColor.length - 1) {
            setSelect(0)
        } else {
            setSelect(select + 1)
        }
    }

    const handleClose = () => {
        navigate(-1)
    }

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);

        const textarea = document.querySelector('textarea');
        if (textarea === null) return
        textarea.addEventListener('input', function () {
            while (textarea.clientHeight < textarea.scrollHeight) {
                textarea.value = textarea.value.substring(0, textarea.value.length - 1);
            }
        });
    }, [])

    return <CreateContainer id="create">
        <CreateStory backgroundColor={backgroundColor[select]} text={text !== ''}>
            <CreateCloseContainer onClick={handleClose}>
                <AiOutlineClose size={'30px'} color={'#fff'} />
            </CreateCloseContainer>
            {text === '' && <CreateTypeTextContainer backgroundColor={backgroundColor[select]}>
                <CreateTypeText backgroundColor={backgroundColor[select]}>
                    <CreateTypeTextText backgroundColor={backgroundColor[select]}>Aa</CreateTypeTextText>
                </CreateTypeText>
            </CreateTypeTextContainer>}
            {text === '' && <CreateBackgroundPicker onClick={handleClick} backgroundColor={backgroundColor[select]} />}
            <CreateInputContainer>
                <CreateInput placeholder="tap to write" maxLength={175} cols={18} rows={10} onChange={(e) => setText(e.target.value)} />
            </CreateInputContainer>
            {text !== '' && <CreateButtonContainer>
                <CreateButton>publish crush</CreateButton>
            </CreateButtonContainer>}
        </CreateStory>
    </CreateContainer>
}

function useHistory() {
    throw new Error("Function not implemented.")
}
