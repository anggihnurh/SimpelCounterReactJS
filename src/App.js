import React, { Component } from 'react';
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter nama="Kelas 1" />
        <Counter nama="Kelas 2" />
        <Counter nama="Kelas 3" />
      </div >
    );
  }
}

export default App;


class Header extends Component {
  render() {
    return (
      <h1>Anggih Nur Hidayat</h1>
    )
  }
}

class Counter extends Component {
  state = {
    number: 0
  }
  // Fungsi Menaikan angka dengan metode increme
  naik = () => {
    console.log("Woi naik")
    this.setState({
      number: this.state.number + 1
    })
  }
  // Fungsi Menurunkan angka dengan metode increme
  turun = () => {
    console.log("Woi Turun")
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <div>
        <h1>Rank {this.props.nama}</h1>
        <h1>{this.state.number}</h1>
        <button onClick={this.naik}>Naik</button>
        <button onClick={this.turun}> Turun</button>
      </div>
    )
  }
}