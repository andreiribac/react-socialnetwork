import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const LoginForm = (props) => {
	const { handleSubmit } = props
	return (
		<form onSubmit={handleSubmit} action="">
			<div>
				<Field
					name="Login"
					component={Input}
					type="text"
					placeholder={"Login"}
					validate={[required]}
				/>
			</div>
			<div>
				<Field
					name="Password"
					component={Input}
					type="password"
					placeholder={"Password"}
					validate={[required]}
				/>
			</div>
			<div>
				<Field
					name="rememberMe"
					component={Input}
					type="checkbox"
				/>
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