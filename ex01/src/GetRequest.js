import React, { Component } from 'react';


class getRequest extends Component {
    constructor (props) {
        super(props);
        this.state = {totalReactpackages: null}
    }

    componentDidMount() {
        fetch('https://api.npms.io/v2/search?q=react')
        .then(response => response.json())
        .then(data => this.setState({totalReactpackages: data.total}));

    }
    render() {
        const {totalReactpackages } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET request</h5>
                <div className="card-body">Total packages: {totalReactpackages}</div>
            </div> 
        );
    }
}

export default getRequest;