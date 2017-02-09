import { Component } from '@angular/core';

@Component({
	selector: 'contact',
	template: `
		<div class="header">
			<h1>Contact</h1>
		</div>
		<div class="contactDiv">
			<form action="" method="post" name="form">
				<table>
					<tr>
						<td><label>Name</label></td>
						<td><input type="text" id="name" name="name"></td>
					</tr>
					<tr>
						<td><label>Email</label></td>	
						<td><input type="text" id="email" name="email"></td>
					</tr>
					<tr>
						<td><label>Message</label></td>	
						<td><textarea id="message" name="message"></textarea></td>
					</tr>
					<tr>
						<td><input type="submit" id="submit" value="Send Message"></td>
					</tr>	
				</table>
			</form>
		</div>
		<footer></footer>
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
	`]
})
export class ContactComponent {

}
