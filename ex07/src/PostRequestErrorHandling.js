import React, { Component } from 'react';

class PostRequestErrorHandling extends Component {
    constructor(props) {
        super(props);
        this.state = { articleid: null, errorMasage: null};
    }

    async componentDidMount() {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ title: 'React POST request examle'})
        };

        fetch('https://jasonplaceholder.typicode.com/invalid-url', requestOptions)
        .then(async response => {
            const data = await response.json();

            if(!response.ok) {
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            this.setState({
                articleId:data.Id
            })
        })
        .catch (error => {
            this.setState( {errorMessage: error});
            console.error('There was an error!', error);
        });
    }

    render() {
        const {errorMessage} = this.state;
            return (
                <div className='card text-center m-3'>
                    <h5 className='card-header'>POST Request with Error Handling</h5>
                    <div className='card-body'>Error message: { errorMessage }         
                     </div>
                </div>
            );
    
            }
        }        
    
    export default PostRequestErrorHandling;