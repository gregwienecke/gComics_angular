import { Component } 	from '@angular/core';

@Component({
	selector: 'gallery',
	template: `
		<div class="header">
			<h1>Gallery</h1>
		</div>
		<div class="gallery">

		</div>
	`,
	styles: [`
		.header {
			height: 285px;
			width: 90%;
			//background-color: #ccc;
			background-image: url("app/images/sevenposter.jpg");
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

	`]
})
export class GalleryComponent {
	
}