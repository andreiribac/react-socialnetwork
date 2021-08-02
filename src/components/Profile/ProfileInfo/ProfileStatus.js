import React from 'react';
import Prealoder from '../../common/Preloader/Prealoder';
import style from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
	}
	activateEditMode = () => {
		this.setState({
			editMode: true,
		});
		// this.forceUpdate();
	}
	deactivateEditMode = () => {
		this.setState({
			editMode: false,
		});
	}
	render() {
		return (
			<>
				{!this.state.editMode &&
					<div>
					<span onDoubleClick={this.activateEditMode}> {this.props.status}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.props.status} />
					</div>
				}
			</>
		);
	}
}

export default ProfileStatus;