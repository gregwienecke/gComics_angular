import { INVENTORY } from './mocks/inventory-mocks';
import { Injectable } from '@angular/core';

@Injectable()
export class InventoryService {
	getInventory(){
		return INVENTORY;
	}
}