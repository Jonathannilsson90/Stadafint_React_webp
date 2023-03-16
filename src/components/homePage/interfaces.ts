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
    onLogOutClickHandler:  () => void;
}

export interface IContactUsCard {
    text   : string
    title   : string
    icon    : string
}