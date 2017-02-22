import { Component }	from '@angular/core';

@Component({
	selector: 'navigation',
	template: `
		<div class="row">
			<div class="col-lg-1 col-md-2 col-xs-12 link nav"><a routerLink="/gallery">home</a></div>
			<div class="col-lg-1 col-md-2 col-xs-12 link nav"><a routerLink="/contact">contact</a></div>
			<div class="col-lg-1 col-md-2 col-xs-12 link nav"><a routerLink="/signIn">sign in</a></div>
		</div>
	`,
	styles: [`
		.link:hover {
			background-color: black;
		}

		.row a {
			height: 100%;
		}

		a {
			color: #fff;
			text-decoration: none;
		}

		input {
			color: #333;
			height: 30px;
			margin-top: 9px;
		}

		.row {
			background-color: #333;
			color: #fff;
			padding-left: 10px;
			font-size: 20px;
		}

		.link {
			text-align: center;
			height: 100%;
		}

		.nav {
			padding: 10px 0 10px 0;
		}

		.button {
			margin-left: 30px;
			background-color: black;
			width: 90px;
			color: salmon;
			margin-top: 10px;
		}

		.button:hover {
			color: salmon;
			background-color: #222;
			cursor: pointer;
		}
	`]
})
export class NavigationComponent {

}