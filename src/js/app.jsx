import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props){
    super(props);
    this.state = {
        balance: 0,
        rate: 0.01,
        term: 15,
        output: '',
    };
  }

  handleChange(e){
    let newBal = Number(document.getElementById('balance').value)
    let newRate = Number(document.getElementById('rate').value)
    let newTerm = Number(document.getElementById('term').value)
    this.setState({
      balance: newBal,
      rate: newRate,
      term: newTerm,
   })
  }

  calculate(balance, rate, term){
    let moRate = (rate/12)/100
    let moTerm = term*12
    let expo = Math.pow((moRate+1),moTerm)
    let numerator = moRate * expo
    let denominator = expo - 1
    let result = (balance*(numerator/denominator)).toFixed(2)
    this.setState({
      output: result
   })
  }

  render() {
    console.log(this.state.output)
    return (
      <div className='container'>
        <h3>Mortgage Calculator</h3>
        <input name='balance' id='balance' type='number' defaultValue={this.state.balance} onChange={e => this.handleChange(e)}/>
        <input name='rate' id='rate' type='number' step='0.01' defaultValue={this.state.rate} onChange={e => this.handleChange(e)}/>
        <select name='term' id ='term' defaultValue={this.state.term} onChange={e => this.handleChange(e)}>
          <option value='15'>15</option>
          <option value='30'>30</option>
        </select>
        <button name='submit' onClick={()=>this.calculate(this.state.balance, this.state.rate, this.state.term)}>Submit</button>
        <div name="output" id="output">{`${this.state.output} is your monthly payment`}</div>
      </div>
    );
  }
}