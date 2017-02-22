import { Component } 		from '@angular/core';

import { Inventory }		from './mocks/inventory';
//import { INVENTORY }		from './mocks/inventory-mocks';
import { InventoryService } from './inventory.service';
import { CartItem }			from './mocks/cart-item';

@Component({
	selector: 'gallery',
	template: `
		<div class="header hidden-xs">
			<h1>Home</h1>
		</div>

		<div class="gallery">
			<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6" *ngFor="let inv of inventory">
				<img [src]="inv.image" [id]="inv.id" [name]="inv.name" (click)="shop(inv.name, inv.image)">
			</div>
		</div>

		<div class="shop hidden">
			<div id="comicImg"></div>
			<div id="comicName"></div>
			<p>Price: $4</p>
			<button (click)="addToCart()">Add To Cart</button><br><br>
			<button (click)="back()">Back</button>
			<button (click)="viewCart()">View Cart</button>
		</div>

		<div class="cart hidden">
			<h2>SHOPPING CART</h2>
			<div id="items"></div>
			<div id="total"></div>
			<button>Checkout</button><br><br>
			<button (click)="home()">Back</button>
		</div>		
	`,
	styles: [`
		.header {
			height: 285px;
			width: 90%;
			//background-color: #ccc;
			background-image: url("/images/sevenposter.jpg");
			background-position: -450px -60px;
			margin: auto;
			text-align: center;
		}

		h1 {
			background-color: salmon;
			padding: 10px 0 10px 0;
			color: #ddd;
			width: 140px;
			margin: auto;
		}

		.gallery {
			width: 90%;
			margin: auto;
		}

		img {
			height: 280px;
		}

		img:hover {
			opacity: 80%;
			cursor: pointer;
		}

		.shop {
			width: 90%;
			margin: auto;
			padding-top: 40px;
			margin-bottom: 100px;
		}

		.cart {
			width: 90%;
			margin: auto;
			margin-bottom: 100px;
		}

		button {
			background-color: black;
			color: salmon;
			border: none;
			padding: 5px 10px 5px 10px;
		}

		button:hover {
			background-color: #222;
		}	

		.items {
			background-color: #ddd;
		}	

	`]
})
export class GalleryComponent {
	inventory: Inventory[];
	cart: CartItem[];
	newItem: CartItem;

	constructor(private inventoryService: InventoryService){}

	ngOnInit(){
		//this.inventory = INVENTORY;
		//let inventoryService = new InventoryService();
		this.inventory = this.inventoryService.getInventory();
		this.cart = [];
	}

	shop(name: string, image: string){
		document.getElementById('comicImg').innerHTML = "<img style='height: 180px' src="+ image + ">"
		document.getElementById('comicName').innerHTML = "<h3>" + name + "</h3>";
		$('.gallery').toggleClass('hidden');
		$('.shop').toggleClass('hidden');
	}

	back(){
		$('.shop').toggleClass('hidden');
		$('.gallery').toggleClass('hidden');
	}

	home(){
		$('.gallery').removeClass('hidden');
		$('.shop').addClass('hidden');
		$('.cart').addClass('hidden');
	}

	addToCart(){
		var cn = document.getElementById('comicName').innerHTML;
		
		var match = false;
		for (var i=0; i<this.cart.length; i+=1){
			if(cn == this.cart[i].name){
				this.cart[i].quantity += 1;
				match = true;
				console.log(this.cart);
			}
				
		}

		if (!match) {
			this.newItem = {
				name: cn,
				price: 4,
				quantity: 1
			}
			this.cart.push(this.newItem);
			console.log(this.cart);
		}
	}

	viewCart(){
		$('.shop').toggleClass('hidden');
		$('.cart').toggleClass('hidden');
		var total = 0;
		document.getElementById('items').innerHTML = "";
		for (var i=0; i<this.cart.length; i+=1){
			total += this.cart[i].price * this.cart[i].quantity;
			document.getElementById('items').innerHTML += this.cart[i].name + 
														  "Quantity: " + this.cart[i].quantity +
														  " Price: $" + this.cart[i].price * this.cart[i].quantity;

		}
		document.getElementById('total').innerHTML = "<br><h4>Total: $" + total + "</h4>";
	}
	
}