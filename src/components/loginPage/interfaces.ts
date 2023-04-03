export interface ILogInForm {
    onSubmitHandler: (name: string) => void
    onAddNewCustomerHandler : (name: string) => void
    isCustomer  : boolean
    display     : boolean
    newCustomer : boolean
}

export interface ILogInPage {
    loginButtonTextHandler : (login : boolean) => void
}

