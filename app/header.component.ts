import { Component } 	from '@angular/core';

@Component({
	selector: 'header',
	template: `
		<div>
			<h1>gCOMICS</h1>
			<p>creator owned comics</p>
		</div>
	`
	styles: [`
		div {
			background-color: black;
			width: 100%;
			padding: 60px 0 10px 20px;
			height: 140px;
		}
		h1 {
			color: salmon;
			font-family: Helvetica;
			font-size: 80px;
			display: inline;
		}
		p {
			color: #666;
			font-size: 30px;
			display: inline;
			font-family: Helvetica;
		}
	`]
})
export class HeaderComponent {
	
}