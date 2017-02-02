import { Component }	from '@angular/core';

@Component({
	selector: 'navigation',
	template: `
		<ul>
			<li>home</li>
			<li>about</li>
			<li>contact</li>
			<li>sign in</li>
			<li><input type="textarea" name="search"></li>
		</ul>
	`
	styles: [`
		li {
			display: inline-block;
			color: #fff;
			font-size: 20px;
			padding-left: 20px;
			font-family: Helvetica;
		}

		li:hover {
			color: #ccc;
		}

		ul {
			background-color: #333;
			width: 100%;
			height: 50px;
			padding: 30px 50px 0 0;
			margin-bottom: 1px;
		}

		input {
			height: 20px;
		}
	`]
})
export class NavigationComponent {}