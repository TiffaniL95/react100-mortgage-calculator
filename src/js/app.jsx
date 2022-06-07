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

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name] : Number(e.target.value)
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
            <input className="form-control" name='balance' id='balance' type='number' defaultValue={this.state.balance} onChange={this.handleChange}/>
          </div>
        </div>
        <div className='form-group row'>  
          <label htmlFor="rate" className="text-right h5 col-sm-4 col-form-label">Interest Rate (%)</label>
          <div className="col-sm-6">
            <input className="form-control" name='rate' id='rate' type='number' step='0.01' defaultValue={this.state.rate} onChange={this.handleChange}/>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor="term" className="text-right h5 col-sm-4 col-form-label">Loan Term (years)</label>
          <div className="col-sm-6">
            <select className="form-control" name='term' id ='term' defaultValue={this.state.term} onChange={this.handleChange}>
              <option value='0'>Select Term</option>
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