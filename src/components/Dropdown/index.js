import React from "react";
import styles from "./Dropdown.scss";


const Dropdown = (props) => {

	return(
		<div className={ styles.dropdownWrapper }>
		  <span>{ props.children }</span>

			<div className={ styles.dropdown }>

			  {
					props.elementList && props.elementList.map((slide, i) => {
						return React.cloneElement(slide, {
						  key: i,
						  className: styles.dropElement,
						});
					})
				}

			</div>
		</div>
	)
}

export default Dropdown;
