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
    //display :boolean
}

export interface IHomePage {
    onScrollToElementClickHandler : (el : string) => void;
}