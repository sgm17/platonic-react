import { PreferenceImageContainer, PreferencesContainer, PreferencesContent, PreferencesHeader, PreferencesImage, PreferencesStart, PrefernecesSubheader } from "./MeetPreferencesStyles"
import preferences from '../../assets/images/meet.jpg'
import { FC, useCallback, useState } from "react"
import { orderedUniversities } from "../story/StoryScroll"
import Select, { ActionMeta } from 'react-select'
import { University } from "../../ts/interfaces/University"
import { useAppDispatch } from "../../app/hooks"
import { postSearching } from "../../features/meet/meetSlice"
import { PreferencesProperties } from "../../pages/Meet"


enum Sex { woman = "woman", man = "man" }

const sexOptions = [
    { value: 0, label: 'woman' },
    { value: 1, label: 'man' }
]

const universityOptions: OptionType[] = orderedUniversities.map(({ id, parentName, name, acronym }) => {
    const label = parentName !== undefined ? `${parentName} ${acronym !== undefined ? `(${acronym}), ` : ', '} ${name}` : `${name} ${acronym !== undefined ? `(${acronym})` : ''}`

    return {
        value: id,
        label: label
    }
})

export type PreferencesType = {
    university: University,
    sex: Sex
}

type OptionType = {
    value: number,
    label: string
}

export const Preferences: FC<PreferencesProperties> = ({ setPreferences }) => {

    const [university, setUniversity] = useState<OptionType>()
    const [sex, setSex] = useState<OptionType>()
    const dispatch = useAppDispatch()

    const onChangeUniversity = (option: OptionType | null, actionMeta: ActionMeta<OptionType>) => {
        if (option === null) return

        setUniversity(option)
    }

    const onChangeSex = (option: OptionType | null, actionMeta: ActionMeta<OptionType>) => {
        if (option === null) return

        setSex(option)
    }

    const handleClick = useCallback(() => {
        const uni = orderedUniversities.find(({ id }) => id === university?.value)

        if (uni === undefined || university === undefined || sex === undefined) return
        const s = Object.values(Sex)[sex.value]

        setPreferences(false)

        dispatch(postSearching({ university: uni, sex: s }))
    }, [])

    return <PreferencesContainer>
        <PreferencesContent>
            <PreferencesHeader>
                meet people from your university
            </PreferencesHeader>
            <PrefernecesSubheader>
                preferences of the person you are looking for
            </PrefernecesSubheader>
            <Select placeholder='university' options={universityOptions} onChange={onChangeUniversity} />
            <Select placeholder='sex' options={sexOptions} onChange={onChangeSex} />
            <PreferencesStart onClick={handleClick}>start searching</PreferencesStart>
        </PreferencesContent>
        <PreferenceImageContainer>
            <PreferencesImage alt="" src={preferences} />
        </PreferenceImageContainer>
    </PreferencesContainer>
}