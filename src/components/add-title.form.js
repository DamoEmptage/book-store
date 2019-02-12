import React, { Component } from 'react';
import './add-title-form.css';

class AddTitleForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            image_url: '',
            rating: {
                max10: ','
            }
        }
    }


    handleTitleChange = (e) => {
        this.setState({ title: e.target.value })
    }
    handleImageChange = (e) => {
        this.setState({ image_url: e.target.value })
    }
    handleRatingChange = (e) => {
        this.setState({ rating: { max10: e.target.value } })
    }
    handleButtonClick = () => {
        this.props.addTitle(this.state)
        this.setState({
            title: '',
            image_url: '',
            rating: {
                max10: ''
            }
        })
    }

    render() {
        return (
            <div className='form-container'>
                <div className='inputs-container'>
                    <label>Title</label>
                    <input placeholder='title' value={this.state.title} onChange={this.handleTitleChange}></input>
                    <label>Image</label>
                    <input placeholder='image_url' value={this.state.image_url} onChange={this.handleImageChange}></input>
                    <label>Rating</label>
                    <input placeholder='rating-max10' value={this.state.rating.max10} onChange={this.handleRatingChange}></input>
                </div>
                <br />
                <button onClick={this.handleButtonClick}>Add Title</button>

            </div>

        )
    }
}


export default AddTitleForm;