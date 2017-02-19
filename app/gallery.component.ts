import { Component } 		from '@angular/core';

import { Inventory }		from './mocks/inventory';
//import { INVENTORY }		from './mocks/inventory-mocks';
import { InventoryService } from './inventory.service';

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

		button {
			background-color: black;
			color: salmon;
			border: none;
			padding: 5px 10px 5px 10px;
		}

		button:hover {
			background-color: #222;
		}		

	`]
})
export class GalleryComponent {
	inventory: Inventory[];

	constructor(private inventoryService: InventoryService){}

	ngOnInit(){
		//this.inventory = INVENTORY;
		//let inventoryService = new InventoryService();
		this.inventory = this.inventoryService.getInventory();
		this.cart = [];
	}

	shop(name, image){
		document.getElementById('comicImg').innerHTML = "<img style='height: 180px' src="+ image + ">"
		document.getElementById('comicName').innerHTML = "<h2>" + name + "</h2>";
		$('.gallery').addClass('hidden');
		$('.shop').removeClass('hidden');
	}

	back(){
		$('.shop').addClass('hidden');
		$('.gallery').removeClass('hidden');
	}

	addToCart(){
		var cn = document.getElementById('comicName').innerHTML;
		console.log(cn);
		this.cart.push(cn);
		console.log(this.cart);
	}
	
}