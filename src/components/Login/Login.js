import React from 'react';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
	const { handleSubmit } = props
	return (
		<form onSubmit={handleSubmit} action="">
			<div>
				<Field name="Login" component="input" type="text" placeholder={"Login"} />
			</div>
			<div>
				<Field name="Password" component="input" type="password" placeholder={"Password"} />
			</div>
			<div>
				<Field name="rememberMe" component="input" type="checkbox" />
				remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({
	// уникальное имя нашей формы
	form: 'login'
})(LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		console.log('formData: ', formData);
	}
	return (
		<div>
			<h1>login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}


export default Login;