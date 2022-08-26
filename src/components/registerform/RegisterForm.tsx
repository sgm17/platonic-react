import { useState } from "react"
import { LeafletRegister } from "../map/LeafletRegister"
import { RegisterFormContainer, RegisterFormForm, RegisterFormInput, RegisterFormLogo, RegisterFormMap, RegisterFormSection, RegisterFormSquare, RegisterFormSubheader, RegisterFormSubmit, RegisterLegal } from "./RegisterFormStyles"

export const RegisterForm = () => {
    const [map, setMap] = useState(false)
    const [university, setUniversity] = useState()

    const handleClick = (e: any) => {
        e.preventDefault()
        setMap(true)
    }

    if (map)
        return <>
            {university && <RegisterFormMap><RegisterFormSubmit>sign up</RegisterFormSubmit></RegisterFormMap>}
            <div style={{ position: 'fixed' }}><LeafletRegister setUniversity={setUniversity} /></div>
        </>

    return <RegisterFormSection>
        <RegisterFormSquare>
            <RegisterFormForm>
                <RegisterFormLogo>PLATONIC</RegisterFormLogo>
                <RegisterFormSubheader>register to see the newest crushes</RegisterFormSubheader>
                <RegisterFormContainer>
                    <RegisterFormInput placeholder="full name"></RegisterFormInput>
                    <RegisterFormInput placeholder="email"></RegisterFormInput>
                    <RegisterFormInput placeholder="university address"></RegisterFormInput>
                    <RegisterFormInput placeholder="password"></RegisterFormInput>
                    <RegisterFormInput placeholder="repeat password"></RegisterFormInput>
                    <RegisterFormSubmit onClick={handleClick}>select area</RegisterFormSubmit>
                </RegisterFormContainer>
                <RegisterLegal>
                    by registering you accept our conditions of use. Get more information about how we use your information in our privacy policy, as well as the use we make of cookies in our cookie policy                </RegisterLegal>
            </RegisterFormForm>
        </RegisterFormSquare>
    </RegisterFormSection>
}

