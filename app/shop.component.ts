import { Component }	from '@angular/core';

@Component({
	selector: 'shop',
	template: `
		<div class="header">
			<h1>Shop</h1>
		</div>

		<div class="shop">
			<button>Add To Cart</button><br><br>
			<a routerLink="/gallery"><button>Back</button></a>
		</div>

		<footer></footer>
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

		.shop {
			width: 90%;
			margin: auto;
			padding-top: 40px;
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

		footer {
			height: 100px;
		}
	`]
})
export class ShopComponent {

}