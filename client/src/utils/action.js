export const CartHelper = class {
    static getCart() {
         if(!this.cartData){
             //Pulled from cookies/local storage OR a blank array


        this.cartData = JSON.parse(localStorage.getItem('products'));
         }
         return this.cartData;
     }
 

 
     static removeFromCartById(id){
         // This will find all objs that are not equal to the param id and assign that new array
         this.cartData = this.cartData.filter( event => event.id !== id)
 
     }
 }
 