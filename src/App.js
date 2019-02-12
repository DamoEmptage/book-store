import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import AddTitleForm from './components/add-title.form';

const BASE_URL = 'httpL//localhost:5000'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: []
    }
  }

  componentDidMount() {
    axios.get(BASE_URL + './games').then(response => {
      this.setState({ games: response.data })
    })
  }

  addTitle = (game) => {
    axios.post(BASE_URL = './games', game).then(response => {
      this.setState({ games: response.data })
    })
  }

  deleteTitle = (title) => {
    console.log('delete title run')
    axios.delete(BASE_URL + './games/${name}').then(response => {
      this.setState({ games: response.data })
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.title.map((game) => {
          return (
            <div className="game-card" key={game.title}>
              <h1>{game.title}</h1>
              <div>{game.rating}</div>
              <img src={game.image_url} />
              <button onClick={() => { this.deleteTitle(game.title) }}>Delete</button>
            </div>
          )
        })}
        <AddTitleForm AddTitle={this.addtitle} />
      </div>
    );
  }
}







export default App;
