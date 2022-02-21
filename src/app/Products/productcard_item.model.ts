export class ProductCardItemModel {
    img: string;
    title: string;
    description: string;
    textside: string;
    buttonname: string;

    constructor(
        img: string,
        title: string,
        description: string,
        textside: string,
        buttonname: string) 
        {
            this.img = img;
            this.title = title;
            this.description = description;
            this.textside = textside;
            this.buttonname = buttonname;
        }
}