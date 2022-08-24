import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems=[
    //{id: 1, productId: 1, productName: 'one', qty: 4, price: 199},
    //{id: 2, productId: 2, productName: 'two', qty: 5, price: 1799},
   // {id: 3, productId: 3, productName: 'three', qty: 6, price: 109},
  ];
  cartTotal=0

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((Product: Product)=> {
     this.addProductToCart(Product) 
    })
    }
    addProductToCart(product: Product){

      let productExists=false
      for (let i in this.cartItems){
        if(this.cartItems[i].productId===product.id){
          this.cartItems[i].qty++
          productExists=true
          break;
        }
      }


      if(!productExists){
        this.cartItems.push({
          productId: product.id,
          productName: product.name,
          qty: 1,
          price: product.price
      
        })
      }

      
      /*if (this.cartItems.length===0){
        this.cartItems.push({
          productId: product.id,
          productName: product.name,
          qty: 1,
          price: product.price
      
        })
      }else{
        for (let i in this.cartItems){
          if(this.cartItems[i].productId===product.id){
            this.cartItems[i].qty++
          }else{
            this.cartItems.push({
              productId: product.id,
              productName: product.name,
              qty: 1,
              price: product.price
          
            })
  
          }
        }

      }*/
      this.cartTotal=0
      this.cartItems.forEach(item=>{
      this.cartTotal +=(item.qty * item.price)
    })

  }

}
