export interface IHowItWorksCard {
    info       : boolean
    circleText : string
    hText      : string
    pText      : string
    num        : number
}

export interface IWhyChooseUsCard {
    text    : string
    title   : string
    icon    : string

}

export interface IHomePage {
    //onLogOutClickHandler:  () => void;
    loginButtonTextHandler :  (login : boolean) => void;
}

export interface IContactUsCard {
    text   : string
    title   : string
    icon    : string
}