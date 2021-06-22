import style from './Post.module.css';

function Post(props) {
	return (
		<div className={style.item}>
			<img src="https://casinos-landing.s3-eu-west-1.amazonaws.com/zigzag777/_main_img/__21/birthday-21/ZigZag777_widget_Birthday5.png" alt="" />
			{props.message}
			<div>
				<span>like</span> <span>{props.count}</span>
			</div>
		</div>
	);
}

export default Post;