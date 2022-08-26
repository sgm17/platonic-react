import { HomePopupBody, HomePopupContainer, HomePopupHeader, HomePopupTable, HomePopupTableElement, HomePopupTableHeader, HomePopupTableRow, HomePopupTriangle } from "./HomePopupStyles"
import final from '../../final.json'

export const HomePopup = () => {
    return <HomePopupContainer>
        <HomePopupTriangle />
        <HomePopupBody>
            <HomePopupHeader>recent</HomePopupHeader>
            <HomePopupTable>
                <HomePopupTableHeader>uni</HomePopupTableHeader><HomePopupTableHeader>nom</HomePopupTableHeader>
                {final.map((university, i) => {
                    return <HomePopupTableRow key={i}>
                        {university.parentName &&
                            <HomePopupTableElement>
                                {university.parentName} {university.acronym ? `(${university.acronym})` : ''}
                            </HomePopupTableElement>}
                        <HomePopupTableElement>
                            {university.name}
                        </HomePopupTableElement>
                    </HomePopupTableRow>
                })}
            </HomePopupTable>
        </HomePopupBody>
    </HomePopupContainer>
}