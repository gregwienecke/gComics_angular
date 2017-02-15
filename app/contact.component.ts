import { Component } from '@angular/core';

@Component({
	selector: 'contact',
	template: `
		<div class="header">
			<h1>Contact</h1>
		</div>
		<div class="contactDiv" [hidden]="submitted">
			<form name="form" (ngSubmit)="onSubmit()">
				<h2>Send Us A Message</h2>

				<label>Name</label><br>
				<input type="text" id="name" name="name"><br>

				<label>Email</label><br>
				<input type="text" id="email" name="email"><br>

				<label>Message</label><br>
				<textarea id="message" name="message"></textarea><br>

				<input type="submit" id="submit" value="Send Message">
			</form>
		</div>

		<div [hidden]="!submitted" class="contactDiv"> 
			<h2>Thank You!</h2>
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

		#message {
			width: 300px;
			height: 100px;
		}

		footer {
			height: 100px;
		}

		.contactDiv {
			padding-left: 100px;
			padding-top: 30px;
		}

		tr {
			margin-top: 10px;
		}

		input[type=submit]{
			background-color: black;
			border: none;
			color: salmon;
			padding: 5px 10px 5px 10px;
		}

		input[type=submit]:hover {
			background-color: #222;
		}
	`]
})
export class ContactComponent {
	
	submitted = false;

	onSubmit(){
		this.submitted = true;
	}
}
