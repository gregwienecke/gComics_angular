import { Component } from '@angular/core';

@Component({
	selector: 'signIn',
	template: `
		<div class="header">
			<h1>Sign In</h1>
		</div>
		<div class="signInDiv">
			
			<form method="post" name="signInForm">
				<h2>Sign In</h2>
				<label>Username</label><br>
				<input type="text" id="name" name="name"><br>
				<label>Password</label><br>
				<input type="password" id="pw" name="pw"><br><br>
				<input type="submit" value="sign in">
			</form>
				
			<form action="" method="post" name="registerForm">
				<h2>Register</h2>
				<label>Username</label><br>
				<input type="text"><br>
				<label>Password</label><br>
				<input type="password"><br><br>
				<input type="submit" id="submit" value="register">
			</form>
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

		.signInDiv {
			padding-left: 100px;
		}

		footer {
			height: 100px;
		}

		input[type=submit]{
			background-color: black;
			border: none;
			color: salmon;
			padding: 5px 10px 5px 10px;
		}

		input[type=submit]:hover{
			background-color: #222;
		}

	`]
})
export class SignInComponent {

}

