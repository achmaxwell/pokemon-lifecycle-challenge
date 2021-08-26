import React, { Component } from 'react'
import './PokeFetch.css';


class PokeFetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokeInfo: '',
      pokeSprite: '',
      pokeName: '',
      timeLeft: 10,
      isTimerRunning: false,
    }
  }

  fetchPokemon() {
    let min = Math.ceil(1);
    let max = Math.floor(152);
    let pokeNum = Math.floor(Math.random() * (max - min) + min);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`, {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        this.setState({
          pokeInfo: res,
          pokeSprite: res.sprites.front_default,
          pokeName: res.species.name,
          timeLeft: 10,
        })
      })
      .catch((err) => console.log(err))
  }

  componentDidMount = () => {
    this.interval = setInterval(
        () => this.setState({
            timeLeft: this.state.timeLeft - 1
        }), 1000)
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.timeLeft === 1){
        clearInterval(this.interval)
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  render() {
    return (

      // <div className={'wrapper'}>
      // <button className={'start'} onClick={() => this.fetchPokemon()}>Start!</button>
      // <h1 className={'timer'}>{this.state.timeLeft}</h1>
      // <div className={'pokeWrap'}>
      //   <img className={'pokeImg'} src={this.state.pokeSprite} style={{opacity: 0.1}}/>
      //   <h1 className={'pokeName'}>{this.state.pokeName}</h1>
      // </div>
      //     </div>

          // SOLUTION TO WORK OUT //
      <>
            {this.state.timeLeft > 0 
            ?
            <>
            <div className={'wrapper'}>
        <button className={'start'} onClick={() => this.fetchPokemon()}>Start!</button>
        <h1 className={'timer'}>{this.state.timeLeft}</h1>
        <div className={'pokeWrap'}>
          <img className={'pokeImg'} src={this.state.pokeSprite} style={{opacity: 0.1, backgroundColor: 'black'}}/>
        </div>
            </div>
            </>
            :
            <div>
              <button className={'start'} onClick={() => this.fetchPokemon()}>Start!</button>
            <div className={'pokeWrap'}>
              <img className={'pokeImg'} src={this.state.pokeSprite}/>
            </div>
              <h1 className={'pokeName'}>{this.state.pokeName}</h1>
      </div>
            }
            </>
    )
  }
  
}


export default PokeFetch;