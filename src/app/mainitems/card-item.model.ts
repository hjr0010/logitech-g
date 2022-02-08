export class CardItemModel {
    img: string;
    title: string;
    description: string;
    background: string;
    imagetype: string;

    constructor(
        img: string,
        title: string,
        description: string,
        background: string,
        imagetype: string) 
        {
            this.img = img;
            this.title = title;
            this.description = description;
            this.background = background;
            this.imagetype = imagetype;
        }
}