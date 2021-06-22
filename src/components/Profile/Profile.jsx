import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';


function Profile() {
	return (
		<>
			<img className={style.contentImg} src="https://st.depositphotos.com/1003348/2724/i/950/depositphotos_27241193-stock-photo-sunset-panorama.jpg" alt="" />
			<div>
				ava + description
			</div>
			<MyPosts />
		</>
	);
}

export default Profile;