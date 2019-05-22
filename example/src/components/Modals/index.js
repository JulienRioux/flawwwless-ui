import React, { Component } from 'react';
import { Modal, Button } from 'flawwwless-library'


class Modals extends Component {
	state = {
		hideModal1: false,
		hideModal2: false
	}

	toggleModal1 = () => {
		this.setState(prevState => ({ hideModal1: !prevState.hideModal1 }))
	}

	toggleModal2 = () => {
		this.setState(prevState => ({ hideModal2: !prevState.hideModal2 }))
	}

	render(){
		return (
			<div className="container">
				<div className="componentBlock">
					<h3 className="componentTitle">Modal</h3>
					<p className="componentDescr">Do something else.</p>

					<span style={{ marginRight: ".5rem"}}><Button type="success" onClick={ this.toggleModal1 }>Modal without title</Button></span>
					<Button onClick={ this.toggleModal1 }>Modal with title</Button>

					<Modal
						title="Modal title"
						isVisible={ this.state.hideModal1 }
						toggleModal={ this.toggleModal1 }>
						<div>
							<h3 style={{ marginTop: 0}}>This is a modal!</h3>
							<p>aute quem fore labore dolor noster quorum quid summis quae anim anim cillum dolor labore tempor culpa anim enim velit</p>
							<p>minim culpa quae eram tamen magna aliqua sint veniam fore quis tempor export
								aliqua summis quem summis aliqua dolore export sint tempor malis elit quae</p>
							<div className="bottomRightCardBtn">
								<Button onClick={ this.toggleModal1 } type="primary" round="true">OK</Button>
							</div>
						</div>
					</Modal>

					<Modal
						toggleModal={ this.toggleModal2 }
						isVisible={ this.state.hideModal2 } >
						<div>
							<h3>This is a modal without title!</h3>
							<p>aute quem fore labore dolor noster quorum quid summis quae anim anim cillum dolor labore tempor culpa anim enim velit</p>
							<p>minim culpa quae eram tamen magna aliqua sint veniam fore quis tempor export
								aliqua summis quem summis aliqua dolore export sint tempor malis elit quae</p>
							<div className="bottomRightCardBtn">
								<Button onClick={ this.toggleModal2 } type="primary" round="true">OK</Button>
							</div>
						</div>
					</Modal>
				</div>
			</div>
		)
	}
}

export default Modals;
