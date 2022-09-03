import { AddItemContainer, AddItemCloseContainer, AddRoundTextContainer, CreateTypeText, CreateTypeTextText, CreateBackgroundPicker, CreateInputContainer, CreateInput, CreateButtonContainer, CreateButton } from "./AddStyles";
import { FC, useCallback, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { createStory } from "../../features/story/storySlice";

const backgroundColor = ['blue', 'red', 'green', 'orange', 'pink', 'olive', 'teal', 'violet', 'purple', 'gray', 'brown', 'cyan']

type AddItemProperties = {
    myId: number,
    myUniversityId: number
}

export const AddItem: FC<AddItemProperties> = ({ myId, myUniversityId }) => {
    const [select, setSelect] = useState(0)
    const [text, setText] = useState('')
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

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

    const handleSubmit = useCallback(() => {
        dispatch(createStory({
            userId: myId,
            universityId: myUniversityId,
            body: text,
            backgroundColor: backgroundColor[select]
        }))
    }, [])

    const content = text !== ''

    return <AddItemContainer backgroundColor={backgroundColor[select]} text={content}>
        <AddItemCloseContainer onClick={handleClose}>
            <AiOutlineClose size={'30px'} color={'#fff'} />
        </AddItemCloseContainer>
        {!content && <AddRoundTextContainer backgroundColor={backgroundColor[select]}>
            <CreateTypeText backgroundColor={backgroundColor[select]}>
                <CreateTypeTextText backgroundColor={backgroundColor[select]}>Aa</CreateTypeTextText>
            </CreateTypeText>
        </AddRoundTextContainer>}
        {!content && <CreateBackgroundPicker onClick={handleClick} backgroundColor={backgroundColor[select]} />}
        <CreateInputContainer>
            <CreateInput placeholder="tap to write" maxLength={175} cols={18} rows={10} onChange={(e) => setText(e.target.value)} />
        </CreateInputContainer>
        {content && <CreateButtonContainer>
            <CreateButton onClick={handleSubmit}>publish crush</CreateButton>
        </CreateButtonContainer>}
    </AddItemContainer >

}