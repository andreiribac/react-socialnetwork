import React from 'react';
import style from './ProfileInfo.module.css';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';
import s from '../../common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			{error && <div className={s.formSummaryError}>
				{error}
			</div>}
			<div><button>save</button></div>
			<div>
				<b>My name is:</b> {createField("Full name", "fullName", [], Input)}
			</div>
			<div>
				<b>Something about me:</b> {createField("about me", "aboutMe", [], Input)}
			</div>
			<div>
				<b>Lookink for a job:</b> 
				{createField("", "LookinkForAJob", [], Input, {type: "checkbox"})}
			</div>
			<div>
				<b>My skills:</b> {createField("My skills", "lookingForAJobDescription", [], Textarea)}
			</div>
			<div>
				<b>About me:</b> {createField("About me", "aboutMe2", [], Input)}
			</div>
			<div>
				<b>Contacnts:</b> {Object.keys(profile.contacts).map(key => {
					return (
						<div key={key} className={style.contact}>
							<b>{key}:</b> {createField(key, "contacts." + key, [], Input)}
						</div>
					)
				})}
			</div>
		</form>
	)
}


const ProfileDataFormReduxForm = reduxForm({
	// уникальное имя нашей формы
	form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormReduxForm;