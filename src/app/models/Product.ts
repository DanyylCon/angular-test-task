export class Product{
    ProductId: number;
    ColorIdx: number;
    ProductCode: string;
    ProductDescription: string;
    Price: number;
    VoDatum: string;
    IsHeavy: boolean;
    RestrictedLands: string;
    IsFsk: boolean;
    IsOrdergruppeC: boolean;

    constructor(){
        this.ProductId =0;
        this.ColorIdx = 0;
        this.ProductCode = '';
        this.ProductDescription = '';
        this.Price = 0;
        this.VoDatum = '';
        this.IsHeavy = false;
        this.RestrictedLands = '';
        this.IsFsk = false;
        this.IsOrdergruppeC = false;
    }


}