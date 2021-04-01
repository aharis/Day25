import React, { Component } from "react";

class PostRequest extends Component {
	constructor(props) {
		super(props);
		this.state = { articleId: null };
	}

	componentDidMout() {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "aplication/jeson" },
			body: JSON.stringify({ title: "React POST Reqest EXAMLE" }),
		};

		fetch("https://jsonplaceholdr.typicode.com/posts", requestOptions)
			.then((response) => response.json())
			.then((data) => this.setState({ articleID: data.id }));
	}
	render() {
		const { articleId } = this.state;
		return (
			<div className='card text-center m-3'>
				<h5 className='card-header'>Simple POST Request</h5>
				<div className='card-body'>Article Id: {articleId}</div>
			</div>
		);
	}
}

export default PostRequest;
