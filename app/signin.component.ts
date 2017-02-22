import { Component } from '@angular/core';

@Component({
	selector: 'signIn',
	template: `
		<div class="header hidden-xs">
			<h1>Sign In</h1>
		</div>
		<div class="signInDiv" [hidden]="submitted">

			<form name="signInForm" (ngSubmit)="onSignInSubmit()">
				<h2>Sign In</h2>
				<label>Username</label><br>
				<input [(ngModel)]="user.name" type="text" id="name" name="name" required><br>
				<label>Password</label><br>
				<input [(ngModel)]="user.password" type="password" id="pw" name="password" required><br><br>
				<input type="submit" value="sign in"><span class="hidden" id="error">Incorrect username or password</span>
			</form>

			<form name="registerForm" (ngSubmit)="onRegisterSubmit()">
				<h2>Register</h2>
				<label>Username</label><br>
				<input [(ngModel)]="newUser.name" type="text" name="name" required><br>
				<label>Password</label><br>
				<input [(ngModel)]="newUser.password" type="password" name="password" required><br><br>
				<input type="submit" id="submit" value="register">
			</form>

		</div>
		<div [hidden]="!submitted" class="signInDiv">
			<h2>Signed In</h2>
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

		#error {
			color: red;
			margin-left: 15px;
		}
	`]
})
export class SignInComponent {

	submitted = false;

	user = {
		username: "",
		password: ""
	}

	newUser = {
		username: "",
		password: ""
	}

	users = [
		{
			username: "Greg",
			password: "testpw"
		}
	]

	onRegisterSubmit(){
		this.submitted = true;

		var newUser = {
			name: this.newUser.name,
			password: this.newUser.password
		}

		this.users.push(newUser)
		console.log(this.users)
	}

	onSignInSubmit(){
		for(var i=0; i<this.users.length; i+=1){
			if (this.user.name == this.users[i].username && this.user.password == this.users[i].password){
				this.submitted = true;
			} else {
				$('#error').removeClass('hidden');
			}
		}
	}
}

