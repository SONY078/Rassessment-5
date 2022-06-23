import React, { PureComponent } from 'react'
import './PureandHoc.css';
export default class PureComponents extends PureComponent
{
    
    
  render() {
    var { label, score = prompt("enter score of subjects:"), total = Math.max(100, score) } = this.props;
    
    return (
      <div id='pure'>
        <h1>PureComponents</h1>
        <h3> ReactJS has provided us a Pure Component.
             If we extend a class with Pure Component, there is no need for
              shouldComponentUpdate() Lifecycle Method. ReactJS Pure Component Class compares current state
             and props with new props and states to decide whether the React component should 
             re-render itself or  Not.</h3>
             <hr/>
             
             <h4>{label}</h4>
             <p>Total Percentage : { Math.round(score / total * 100) }%</p>
      </div>
    )
  }
}

