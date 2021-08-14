import React, { PureComponent } from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

let maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field
				name="newPostText"
				component={Textarea}
				validate={[required, maxLength10,]}
			/>
		</div>
		<div>
			<button>Add post</button>
		</div>
	</form>;
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

const MyPosts = React.memo( props => {
  console.log('render');
  let postsElements = props.posts.map(el => {
    return <Post message={el.message} count={el.count} id={el.id} />;
  });

  let onAddPost = values => {
    props.addPost(values.newPostText);
  };

  return <div className={style.postsBlock}>
			<h3>My posts</h3>
			<AddNewPostFormRedux onSubmit={onAddPost} />
			<div className={style.posts}>
				{postsElements}
			</div>
		</div>;
});



export default MyPosts;