import React, { Component } from 'react';


class GetRequestSetHeader extends Component {
    constructor (props) {
        super(props);
        this.state = {totalReactPackages: null}
    }

    componentDidMount() { 
        const headers = {'Content-Type': 'application/json'}
    fetch('https://api.nmps.io/v2/search?q=react', {headers})
    .then(response => response.json())
    .then(data => this.setState({ totalReactPackages: data.total}));
    }
    render() {
        const { totalReactPackages} = this.state;
        return(
            <div className="card text_center m-3">
                <h5 className="card-header">GET Requestwith Set Headers</h5>
                <div className="card-body">Total packages: {totalReactPackages}</div>
            </div>
        );
    }
}

export default GetRequestSetHeader;