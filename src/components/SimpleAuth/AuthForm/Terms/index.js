import React from 'react';
import styles from "../AuthForm.css";

const Terms = (props) => {
	return (
		<div className={ styles.fadeIn }>
			<div className={ styles.authBtnDiv }>
				<h1 className={ styles.authTitle }>
					<span>Terms ⚖️</span>
				</h1>

				<span className={ styles.changeFormBtnDiv }>
					<button
						onClick={ props.showSignin }
						className={ styles.createAnAccount }>
						<span className="">Go back</span>
					</button>
				</span>
			</div>
		</div>
	)
}

export default Terms;
