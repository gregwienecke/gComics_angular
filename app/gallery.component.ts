import { Component } 		from '@angular/core';

import { Inventory }		from './mocks/inventory';
//import { INVENTORY }		from './mocks/inventory-mocks';
import { InventoryService } from './inventory.service';

@Component({
	selector: 'gallery',
	template: `
		<div class="header">
			<h1>Home</h1>
		</div>

		<div class="gallery">
			<div class="col-lg-2 col-xs-6" *ngFor="let inv of inventory">
				<a routerLink="/shop">
					<img [src]="inv.image" [id]="inv.id">
				</a>
			</div>
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

	`]
})
export class GalleryComponent {
	inventory: Inventory[];

	constructor(private inventoryService: InventoryService){}

	ngOnInit(){
		//this.inventory = INVENTORY;
		//let inventoryService = new InventoryService();
		this.inventory = this.inventoryService.getInventory();
	}
	
}