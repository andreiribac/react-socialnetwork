import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
	const { handleSubmit } = props
	return (
		<form onSubmit={handleSubmit} action="">
			<div>
				<Field
					name="email"
					component={Input}
					type="text"
					placeholder={"Email"}
					validate={[required]}
				/>
			</div>
			<div>
				<Field
					name="password"
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
		props.login(formData.email, formData.password, formData.rememberMe);
	}

	if (props.isAuth) {
		return <Redirect to={"/profile"} />
	}

	return (
		<div>
			<h1>login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { login })(Login);