import React, { Component } from 'react';
import './add-title-form.css';

class AddTitleForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            image_url: '',

        }
    }


    handleTitleChange = (e) => {
        this.setState({ title: e.target.value })
    }
    handleImageChange = (e) => {
        this.setState({ image_url: e.target.value })
    }

    handleButtonClick = () => {
        this.props.addTitle(this.state)
        this.setState({
            title: '',
            image_url: '',

        })
    }

    render() {
        return (
            <div className='add-title-form'>
                <div>
                    <form ref="myForm" className="myForm">
                        <label>Title</label>
                        <input type="text" placeholder='title' value={this.state.title} onChange={this.handleTitleChange} className='formField'></input>
                        <label>Image</label>
                        <input type='text' placeholder='image_url' value={this.state.image_url} onChange={this.handleImageChange} className='formField'></input>
                    </form>
                </div>
                <br />
                <button onClick={this.handleButtonClick} className='myButton'>Add Title</button>

            </div>

        )
    }
}


export default AddTitleForm;