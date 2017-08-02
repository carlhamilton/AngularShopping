import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl:  'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

 export class ProductListComponent implements OnInit {//make the file available to use
     pageTitle: string = 'Product List';
     imageWidth: number = 50;
     imageMargin: number = 2;
     showImage: boolean = false;
     listFilter: string = 'cart';

     products: IProduct []= [//List of products to be used in our table.

         {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2015",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 13.99,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2017",
        "description": "15 gallon capacity rolling garden cart",
        "price": 46.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 12.50,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 14.99,
        "starRating": 3.7,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
        "productId": 10,
        "productName": "xbox One Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2016",
        "description": "Standard two-button video game controller",
        "price": 59.99,
        "starRating": 4.6,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }



     ];
toggleImage(): void {
    this.showImage = !this.showImage;
}
ngOnInit(): void {
    console.log('In OnInit');
}

}