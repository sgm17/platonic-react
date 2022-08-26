import { PreferencesArrowDown, PreferencesContainer, PreferencesContent, PreferencesHeader, PreferencesImage, PreferencesPopup, PreferencesPopupBody, PreferencesPopupClose, PreferencesPopupTable, PreferencesPopupTableElement, PreferencesPopupTableHeader, PreferencesPopupTableRow, PreferencesSection, PreferencesSelect, PreferencesSelectionContainer, PreferencesSelectionText, PreferencesSelectText, PreferencesSexContainer, PreferencesSexPopup, PreferencesSexText, PreferencesStart, PrefernecesSubheader } from "./PreferencesStyles"
import { MdExpandMore } from 'react-icons/md'
import { useState } from "react"
import final from '../../final.json'
import { AiOutlineClose } from 'react-icons/ai'

export const Preferences = (props: any) => {
    const { setSearch, setFound } = props

    const [area, setArea] = useState(final[0])
    const [sex, setSex] = useState<string>('woman')

    const [areaPopup, setAreaPopup] = useState(false)
    const [sexPopup, setSexPopup] = useState(false)

    const sexItems = ['man', 'woman']

    function SexPopupContainer() {

        function handleClick(index: number) {
            setSex(sexItems[index])
            setSexPopup(false)
        }

        return <PreferencesSexPopup>
            {sexItems.map((sex, i) => {
                return <PreferencesSexContainer onClick={() => handleClick(i)}>
                    <PreferencesSexText key={i}>
                        {sex}
                    </PreferencesSexText>
                </PreferencesSexContainer>
            })}
        </PreferencesSexPopup>
    }

    function AreaPopupContainer() {

        function handleClick(index: number) {
            setArea(final[index])
            setAreaPopup(false)
        }

        return <PreferencesPopup>
            <PreferencesPopupBody>
                <PreferencesPopupTable>
                    <PreferencesPopupTableHeader>
                        uni
                    </PreferencesPopupTableHeader>
                    <PreferencesPopupTableHeader>
                        area
                    </PreferencesPopupTableHeader>
                    {final.map((university, i) => {
                        return <PreferencesPopupTableRow onClick={() => handleClick(i)} key={i}>
                            {university.parentName &&
                                <PreferencesPopupTableElement>
                                    {university.parentName} {university.acronym ? `(${university.acronym})` : ''}
                                </PreferencesPopupTableElement>}
                            <PreferencesPopupTableElement>
                                {university.name}
                            </PreferencesPopupTableElement>
                        </PreferencesPopupTableRow>
                    })}
                </PreferencesPopupTable>
                <PreferencesPopupClose>
                    <AiOutlineClose
                        color="#000"
                        size={'30px'}
                        onClick={() => setAreaPopup(false)}
                    />
                </PreferencesPopupClose>
            </PreferencesPopupBody>
        </PreferencesPopup>
    }

    function handleClick() {
        setSearch(true)

        setTimeout(() => {
            setSearch(false)
            setFound(true)
        }, 2000)
    }

    return <PreferencesSection>
        {areaPopup && <AreaPopupContainer />}
        {sexPopup && <SexPopupContainer />}
        <PreferencesContainer>
            <PreferencesContent>
                <PreferencesHeader>
                    meet people from your university
                </PreferencesHeader>
                <PrefernecesSubheader>
                    preferences of the person you are looking for
                </PrefernecesSubheader>
                <PreferencesSelectionContainer onClick={() => setAreaPopup(true)}>
                    <PreferencesSelectionText>
                        area
                    </PreferencesSelectionText>
                    <PreferencesSelect>
                        <PreferencesSelectText>
                            {area.name}
                        </PreferencesSelectText>
                        <PreferencesArrowDown>
                            <MdExpandMore size={'30px'} color={'#000'} />
                        </PreferencesArrowDown>
                    </PreferencesSelect>

                </PreferencesSelectionContainer>
                <PreferencesSelectionContainer onClick={() => setSexPopup(true)}>
                    <PreferencesSelectionText>
                        sex
                    </PreferencesSelectionText>
                    <PreferencesSelect>
                        <PreferencesSelectText>
                            {sex}
                        </PreferencesSelectText>
                        <PreferencesArrowDown>
                            <MdExpandMore size={'30px'} color={'#000'} />
                        </PreferencesArrowDown>
                    </PreferencesSelect>
                </PreferencesSelectionContainer>
                <PreferencesStart onClick={handleClick}>start searching</PreferencesStart>
            </PreferencesContent>
            <PreferencesImage alt="" src="images/meet.jpg" />
        </PreferencesContainer>
    </PreferencesSection>
}