/** @format */

import React from "react";

import "./index.css";

export default class Wheel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: null,
		};
		this.selectItem = this.selectItem.bind(this);
	}

	selectItem() {
		// const probability = [1, 2, 3, 4, 5];

		if (this.state.selectedItem === null) {
			// const selectedItem = Math.floor(Math.random() * this.props.items.length);
			let selectedItem 
			//Total 100
			const genProb = Math.random() * 100;
			console.log("Genprob:", genProb);
			if (genProb >= 0 && genProb < 10) {
				selectedItem = 0;
			}

			if (genProb > 10 && genProb < 15) {
				selectedItem = 1;
			}

			if (genProb > 15 && genProb < 20) {
				selectedItem = 2;
			}

			if (genProb > 20 && genProb < 30) {
				selectedItem = 3;
			}

			if (genProb > 30 && genProb < 70) {
				selectedItem = 4;
			}

			if (genProb > 70 && genProb < 100) {
				selectedItem = 5;
			}

			console.log(selectedItem);
			if (this.props.onSelectItem) {
				console.log("IF:", selectedItem);
				this.props.onSelectItem(selectedItem);
			}
			this.setState({ selectedItem });
		} else {
			this.setState({ selectedItem: null });
			setTimeout(this.selectItem, 500);
		}
	}

	render() {
		const { selectedItem } = this.state;
		const { items } = this.props;

		const wheelVars = {
			"--nb-item": items.length,
			"--selected-item": selectedItem,
		};
		const spinning = selectedItem !== null ? "spinning" : "";

		return (
			<div className="wheel-container">
				<div
					className={`wheel`}
					style={wheelVars}
					onClick={this.selectItem}>
             <img id="bottle"	className={`bottle ${spinning}`} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/356608/bottle.png" alt="spinning bottle"></img>
					{items.map((item, index) => (
						<div
							className="wheel-item"
							key={index}
							style={{ "--item-nb": index }}>
							{item}
						</div>
					))}
				</div>
			</div>
		);
	}
}
