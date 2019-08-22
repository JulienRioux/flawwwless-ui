import React from 'react';
import styles from "./Avatar.scss";

const Avatar = (props) => {
	const avatarStyle = {
		backgroundImage: `url( ${ props.src })`,
		height: props.size,
		width: props.size,
		minHeight: props.size,
		minWidth: props.size,
	};

	// Check the fontSize depending on the length of the initials (1 to 6);
	let fontSize;

	let slicedInitials = "";
	if(props.initials){
		// Change the size of the fontSize depending on the number of characters
		// Max 6 characters...?
		slicedInitials = props.initials.slice(0,5);
		const initLength = slicedInitials.length;

		const majicNumber1 = initLength - .2;
		const majicNumber2 = .2 + (initLength/5);
		fontSize = `calc(${ props.size } / ${ majicNumber1 } * ${ majicNumber2 })`;
	}


	return (
		<div
		  className={ `${ styles.avatarDiv } ${ props.className }` }
		  style={{ ...avatarStyle, ...props.style }}>
			{
				!props.src && (
					<span
					  style={{ fontSize, ...props.initialsStyle }}
					  className={ styles.initials }>
						{ slicedInitials }
					</span>
				)
			}
		</div>
	)
}

Avatar.defaultProps = {
	src: "",
  size: "40px",
	style: {},
	className: "",
	initials: "",
}

export default Avatar;
