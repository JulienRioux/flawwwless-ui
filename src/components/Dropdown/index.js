import React, { Component  } from "react";
import styles from "./Dropdown.scss";


class Dropdown extends Component {
	state = {
		showDropdown: false,
		isClosing: false,
	}

	openDropdown = () => {
		this.setState({
			showDropdown: true,
			isClosing: false
		});
	}

	closeDropDown = async () => {
		await this.setState({ isClosing: true })
		setTimeout(() => {
			this.setState({ showDropdown: false });
		}, 200);
	}





	render(){
		const { showDropdown, isClosing } = this.state;

		// add an animation out
		const animOut = isClosing ? styles.dropdownAnimOut : "";

		const dropdownContent = this.props.elementList && (
			this.props.elementList.map((slide, i) => {
				return React.cloneElement(slide, {
					key: i,
					className: styles.dropElement,
					// onClick: this.toggleDropdown,
				});
			})
		);

		// Change the position of the dropdown
		let positionStyle = {
			top: "100%",
			left: "0",
		}
		if(this.props.position === "bottom-right"){
			positionStyle = {
				top: "100%",
				right: "0",
			}
		} else if(this.props.position === "top-left"){
			positionStyle = {
				bottom: "100%",
				left: "0",
			}
		} else if(this.props.position === "top-right"){
			positionStyle = {
				bottom: "100%",
				right: "0",
			}
		}

		return(
			<div className={ styles.dropdownWrapper }>
				{
					showDropdown && (
						<div
							onClick={ this.closeDropDown }
							className={ styles.dropdownOverlay }></div>
					)
				}

			  <span onClick={ this.openDropdown }>{ this.props.children }</span>

			  {
					showDropdown && (
						<div
							style={ positionStyle }
							onClick={ this.closeDropDown }
							className={ `${ styles.dropdown } ${ animOut }` }>

							{ dropdownContent }

						</div>
					)
				}

			</div>
		)
	}
}

Dropdown.defaultProps = {
	position: "bottom-left",
	elementList: [<span>empty dropdown...🤔</span>],
}

export default Dropdown;
