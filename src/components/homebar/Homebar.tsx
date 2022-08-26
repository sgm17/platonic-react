import { HomebarContainer, HomebarHeader, HomebarItems, HomebarSearch, HomebarSearchArrowDown, LogoContainer, LogoImage, LogoText } from "./HomebarStyles"
import { MdOutlineExpandMore } from 'react-icons/md'
import { Top } from "../top/Top"

export const Homebar = (props: any) => {

    const { select, setSelect, popup, setPopup } = props

    return <HomebarHeader>
        <HomebarItems>
            <LogoContainer>
                <LogoImage alt="" src="./images/platonic.png" />
                <LogoText>PLATONIC</LogoText>
            </LogoContainer>
            <HomebarContainer onClick={() => setPopup(!popup)}>
                <HomebarSearch>select areas</HomebarSearch>
                <HomebarSearchArrowDown>
                    <MdOutlineExpandMore size={'30px'} />
                </HomebarSearchArrowDown>
            </HomebarContainer>
            <Top select={select} setSelect={setSelect} />
        </HomebarItems>
    </HomebarHeader>
}