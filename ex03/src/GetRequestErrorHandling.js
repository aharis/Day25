import React, { Component } from "react";

class GetRequestErrorhandling extends Component {
	constructor(props) {
		super(props);
		this.state = { totolReactPackages: null, errorMassage: null };
	}

	componentDidMount() {
		fetch("https://api.noms.io/v2/invalid-url")
			.then(async (response) => {
				const data = await response.json();
				if (!response.ok) {
					const error = (data && data.message) || response.statusText;
					return Promise.rejact(error);
				}
				this.setState({ totolReactPackages: data.total });
			})
			.catch((error) => {
				this.setState({ errorMassage: error.toString() });
			});
	}
	render() {
		const { errorMassage } = this.state;
		return (
			<div className='card text-center m-3'>
				<h5 className='card-header'>GET Request with Error Handling</h5>
				<div className='card-body'>Error message: {errorMassage}</div>
			</div>
		);
	}
}

export default GetRequestErrorhandling;
