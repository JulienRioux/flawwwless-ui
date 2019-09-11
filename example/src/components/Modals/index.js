import React, { Component } from 'react';
import { Modal, Button, Card, Container } from "flwww";


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
			<Container>
				<Card>
					<div className="componentBlock">
						<h3 className="componentTitle">Modal</h3>
						<p className="componentDescr">Do something else.</p>

						<Button
							type="success"
							onClick={ this.toggleModal1 }
							style={{ marginRight: ".5rem"}}>Modal with title</Button>

						<Button onClick={ this.toggleModal2 }>Modal without title</Button>

						<Modal
							title="This is a modal with a title!"
							isVisible={ this.state.hideModal1 }
							toggleModal={ this.toggleModal1 }>
							<div>
								<p>Aute quem fore labore dolor noster quorum quid summis quae anim anim cillum dolor labore tempor culpa anim enim velit</p>
								<p>Minim culpa quae eram tamen magna aliqua sint veniam fore quis tempor export
									aliqua summis quem summis aliqua dolore export sint tempor malis elit quae</p>

								<p>eram quis fore sunt quorum malis quae quem export aliqua dolore magna minim quid
									nulla noster summis tamen illum noster amet sint export aliqua fugiat nisi amet
									duis culpa quis magna quis irure veniam cillum ipsum ipsum velit minim fore elit
									velit summis sunt fore fugiat ipsum sunt minim export sunt nulla sint sint
									labore veniam fugiat export tamen aliqua cillum multos elit amet dolor magna
									aliqua sint dolor aute noster veniam amet aute quis magna velit aliqua quis aute
									summis sunt duis culpa export sunt anim illum quem veniam quorum illum quem
									noster veniam quis culpa cillum tamen velit aliqua dolor legam noster quis minim
									malis amet minim noster sint nulla sunt tempor fore ipsum culpa legam quorum
									fore quem summis veniam fugiat aliqua duis amet nisi quis aliqua aliqua sint
									dolore enim summis culpa quorum aliqua sint culpa quis eram magna cillum fore
									export duis illum nisi multos export noster esse sunt malis aute enim sint magna
									aliqua dolore quae irure anim quem eram sunt aliqua dolor labore minim quis nisi
									illum culpa summis magna anim legam eram culpa esse elit veniam amet malis
									fugiat irure minim duis tamen quorum fore aute elit nulla veniam veniam quid
									illum cillum summis tamen export fore quae sunt labore sint sunt enim elit quid
									aute dolor cillum sint minim ipsum summis enim quem aliqua magna nisi quorum
									tamen quae esse export summis minim magna eram ipsum veniam culpa legam quem
									enim labore quae fugiat cillum quis velit noster multos irure cillum multos
									aliqua ipsum duis sint ipsum culpa dolor tamen amet elit velit nisi ipsum quorum
									tempor illum multos quorum multos velit quorum aliqua dolore nulla fugiat anim
									anim anim legam velit noster quid quae quae noster aliqua esse noster legam
									legam veniam fugiat fugiat sunt sint quem legam tempor elit</p>
								<div className="bottomRightCardBtn">
									<Button onClick={ this.toggleModal1 } type="primary" round>OK</Button>
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
									<Button onClick={ this.toggleModal2 } type="primary" round>OK</Button>
								</div>
							</div>
						</Modal>
					</div>
				</Card>
			</Container>
		)
	}
}

export default Modals;
