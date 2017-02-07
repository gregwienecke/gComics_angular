import { Component } 	from '@angular/core';

@Component({
	selector: 'gallery',
	template: `
		<div>
			<h1>Gallery</h1>
		</div>
	`,
	styles: [`
		div {
			height: 300px;
			width: 90%;
			//background-color: #ccc;
			background-image: url("app/images/smithsonite.jpg");
			background-position: 30%;
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

	`]
})
export class GalleryComponent {
	
}