
export class CardItemModel {
    img: string;
    title: string;
    description: string;
    background: string;
    backgroundtype: string;
    imagetype: string;
    buttontext: string;
    hr: string;
    link: string;

    constructor(
        img: string,
        title: string,
        description: string,
        background: string,
        backgroundtype: string,
        imagetype: string,
        buttontext: string,
        hr: string,
        link: string) 
        {
            this.img = img;
            this.title = title;
            this.description = description;
            this.background = background;
            this.backgroundtype = backgroundtype;
            this.imagetype = imagetype;
            this.buttontext = buttontext;
            this.hr = hr;
            this.link = link;
        }

}