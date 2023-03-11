export interface ILogInForm {
    onSubmitHandler: (name: string) => void
    text: string
    isCustomer: boolean
    display: boolean
}

export interface ILogInPage {
    loginButtonTestHandler: (login : boolean) => void

}