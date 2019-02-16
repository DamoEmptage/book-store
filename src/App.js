import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import AddTitleForm from './components/add-title.form';

const BASE_URL = 'http://localhost:5000'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: []
    }
  }

  componentDidMount() {
    axios.get(BASE_URL + '/games').then(response => {
      this.setState({ games: response.data })
    })
  }

  addTitle = (game) => {
    axios.post(BASE_URL + '/games', game).then(response => {
      this.setState({ games: response.data })
    })
  }

  deleteTitle = (title) => {
    console.log('delete title run')
    axios.delete(`${BASE_URL}/games/${title}`).then(response => {
      this.setState({ games: response.data })
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.games.filter((game) => Boolean(game.title)).map((game) =>
          (
            <div className="myForm" key={game.title}>
              <form>

                <h1>{game.title}</h1>

                <div className='image'>
                  <img src={game.image_url} />
                </div>


                <button onClick={() => { this.deleteTitle(game.title) }} className='delButton'>Delete</button>

              </form>
            </div>
          )
        )}
        <AddTitleForm addTitle={this.addTitle} />
      </div>
    );
  }
}







export default App;
