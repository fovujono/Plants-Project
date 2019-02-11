export const CartHelper = class {
   static getCart() {
        if(!this.cartData){
            //Pulled from cookies/local storage OR a blank array
            this.cartData = [{date: "2019-02-10T22:51:49.090Z",
            image: "https://images.unsplash.com/photo-1519966283370-ba7869cd01ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            plantName: "Kumquat Tree",
            price: 13,
            stock: 20,
            _id: "5c55c87f3b67080dbc294c46"}];
        }
        return this.cartData;
    }

    static setCart(data) {
        // This will push the data into the cart array
        this.cartData = this.cartData.push(data);
    }


    static removeFromCartById(id){
        // This will find all objs that are not equal to the param id and assign that new array
        this.cartData = this.cartData.filter( event => event.id !== id)

    }
}


