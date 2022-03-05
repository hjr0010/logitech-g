
export class CardItemModel {
    img: string;
    title: string;
    description: string;
    background: string;
    backgroundtype: string;
    imagetype: string;

    constructor(
        img: string,
        title: string,
        description: string,
        background: string,
        backgroundtype: string,
        imagetype: string) 
        {
            this.img = img;
            this.title = title;
            this.description = description;
            this.background = background;
            this.backgroundtype = backgroundtype;
            this.imagetype = imagetype;
        }
}