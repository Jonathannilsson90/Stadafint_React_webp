export interface ILogInForm {
    onSubmitHandler: (name: string) => void
    text       : string
    isCustomer : boolean
    display    : boolean
}

export interface ILogInPage {
    loginButtonTextHandler: (login : boolean) => void

}