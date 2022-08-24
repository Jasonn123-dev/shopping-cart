export class Product {
id: number;
name: string;
description: string;
price: number;
imageUrl: string;

constructor(id: number, name: string, 
description: string, price: number,
imageUrl='https://images-na.ssl-images-amazon.com/images/I/41snE30WnVL._SX331_BO1,204,203,200_.jpg'){
this.id=id
this.name=name
this.description=description
this.price=price
this.imageUrl=imageUrl


}
}

