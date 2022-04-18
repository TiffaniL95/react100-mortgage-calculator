import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props){
    super(props);
    this.state = {
        balance: 0,
        rate: 0,
        term: 0,
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
      output: `$${result} is your monthly payment`
   })
  }

  render() {
    console.log(this.state.output)
    return (
      <div className='container'>
        <div className="row">
          <span className="col-sm-4"></span>
          <div className="col-sm-6 page-header">
            <h3>Mortgage Calculator</h3>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor="balance" className="text-right h5 col-sm-4 col-form-label">Loan Balance</label>
          <div className="col-sm-6">
            <input className="form-control" name='balance' id='balance' type='number' defaultValue={this.state.balance} onChange={e => this.handleChange(e)}/>
          </div>
        </div>
        <div className='form-group row'>  
          <label htmlFor="rate" className="text-right h5 col-sm-4 col-form-label">Interest Rate (%)</label>
          <div className="col-sm-6">
            <input className="form-control" name='rate' id='rate' type='number' step='0.01' defaultValue={this.state.rate} onChange={e => this.handleChange(e)}/>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor="term" className="text-right h5 col-sm-4 col-form-label">Loan Term (years)</label>
          <div className="col-sm-6">
            <select className="form-control" name='term' id ='term' defaultValue={this.state.term} onChange={e => this.handleChange(e)}>
              <option value='15'>15</option>
              <option value='30'>30</option>
            </select>
          </div>
        </div>  
          <div className='form-group row'>
          <span className="col-sm-4"></span>
            <div className='col-sm-6 text-left mt-4'>
              <button className='btn btn-info' name='submit' onClick={()=>this.calculate(this.state.balance, this.state.rate, this.state.term)}>Calculate</button>
              <div className='text-left h4' name="output" id="output">{this.state.output}</div>
            </div>
          </div>  
      </div>
    );
  }
}