import { useTranslation } from "react-i18next"
import { LoginFormContainer, LoginFormCreate, LoginFormCreateButton, LoginFormDescription, LoginFormForgot, LoginFormForm, LoginFormInput, LoginFormLogo, LoginFormSection, LoginFormSquare, LoginFormSubmit, LoginFormText, LoginFormWrapper } from "./LoginFormStyles"

export const LoginForm = () => {
    const { t } = useTranslation()
    return <LoginFormSection>
        <LoginFormWrapper>
            <LoginFormText>
                <LoginFormLogo>PLATONIC</LoginFormLogo>
                <LoginFormDescription>
                    {t('loginform_description')}
                </LoginFormDescription>
            </LoginFormText>
            <LoginFormSquare>
                <LoginFormForm>
                    <LoginFormContainer>
                        <LoginFormInput placeholder="email" />
                        <LoginFormInput placeholder="password" />
                        <LoginFormSubmit>{t('loginform_login')}</LoginFormSubmit>
                        <LoginFormForgot to={'/'}>{t('loginform_forgot')}</LoginFormForgot>
                    </LoginFormContainer>
                    <LoginFormCreate>
                        <LoginFormCreateButton to={'/signup'}>{t('loginform_signup')}</LoginFormCreateButton>
                    </LoginFormCreate>
                </LoginFormForm>
            </LoginFormSquare>
        </LoginFormWrapper>
    </LoginFormSection>
}