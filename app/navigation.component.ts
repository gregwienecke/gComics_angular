import { Component }	from '@angular/core';

@Component({
	selector: 'navigation',
	template: `
		<div class="row">
			<div class="col-lg-1 col-xs-12 link"><a routerLink="/gallery">home</a></div>
			<div class="col-lg-1 col-xs-12 link"><a routerLink="/contact">contact</a></div>
			<div class="col-lg-1 col-xs-12 link"><a routerLink="/signIn">sign in</a></div>
			<div class="col-lg-1 col-xs-12 link"><a routerLink="/cart">cart</a></div>
			<div class="col-lg-2 col-xs-12"><input type="text" name="search"></div>
			<div class="col-lg-1 col-xs-12 button">search</div>
		</div>
	`,
	styles: [`
		.link:hover {
			cursor: pointer;
			color: red;
			background-color: black;
		}

		a {
			color: #fff;
			text-decoration: none;
		}

		input {
			color: #333;
			height: 30px;
		}

		.row {
			background-color: #333;
			height: 50px;
			color: #fff;
			padding-top: 10px;
			padding-left: 10px;
			font-size: 20px;
		}

		.link {
			text-align: center;
			padding-top: 2px;
			height: 100%;
		}

		.button {
			margin-left: 30px;
			background-color: #ccc;
			width: 90px;
			color: #444;
		}

		.button:hover {
			color: #222;
			cursor: pointer;
		}
	`]
})
export class NavigationComponent {

}