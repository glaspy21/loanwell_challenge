import React, { Component } from 'react';
import * as Survey from "survey-react";
import { surveyJson } from '../survey';

Survey.StylesManager.applyTheme("bootstrap");

class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      isHome: true,
      form: null
    }
    this.onFormComplete = this.onFormComplete.bind(this)
    this.handleFormClick = this.handleFormClick.bind(this)
  }

  onFormComplete = (result) => {
    const jsonResult = `JSON result: ${JSON.stringify(result.data)}`
    this.setState({ isComplete: true, jsonResult})
  }
  
  handleFormClick = (e) => {
    this.setState({ form: e.target.value, isHome: false })
  }
  
  sendHome = () => {
    this.setState({ isHome: true })
  }
  
  render() {
    const formRender = this.state.isHome ? 
      <div>
        <div>
          <button type="button" onClick={(e) => this.handleFormClick(e)} className="btn btn-Success" value="sba">SBA Form</button>
        </div>
        <div>
          <button type="button" onClick={this.handleFormClick} className="btn btn-Primary" value="ps">Personal Statement</button>
        </div>
      </div> : 
      <Survey.Survey json={surveyJson[this.state.form]} showCompletedPage={false} onComplete={this.onFormComplete} /> 
    
    const onSurveyCompletion = this.state.jsonResult? ( <div>{[this.state.jsonResult]}</div> ) : null

    
    return (
      <div className="App p-1">
        <div>
          <button type="button" onClick={this.sendHome} className="btn btn-Primary">Home</button>
          {formRender}
          {onSurveyCompletion}
          {}
        </div>
      </div>
    )
  }
}

export default App;
