import React, { Component } from 'react'

class App extends Component {

  state = {
      peopleData: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(({people}) => this.setState({ peopleData: people }))

  }

  render() {
    return (
      <div>
        {this.state.peopleData.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }

 

}

export default App