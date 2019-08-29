import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './CSS/app.css';
//import './assests/style.css';
import Quizservices from './Quizservices';

class Quiz extends Component {
  
  state={
    questionBank:[],
  }


  

   getQuestions=()=>{
    Quizservices().then(question=>{
      this.setState({
        questionBank:question
      });
    
  })}
 

  componentDidMount(){
    this.getQuestions();
  }

  render(){
    return (
      <div>
                <header>
                <a href="/addMaker">Publish Adds</a>
               
                </header><br/><br/><br/><br/>   
    <div className="container">
    
     <div className='questionBox'>
      {this.state.questionBank.length>0 && this.state.questionBank.map(({question,answers})=>(<h4>{question} <br/>  {answers}</h4>))}
    </div>
      
    </div></div>
  );
}}

//ReactDOM.render(<Quiz/>,document.getElementById("root"));

//export default Quiz;


  //{this.state.questionBank.length>0 && this.state.questionBank.map(({question})=>(<h4>{question}</h4>))}

  //<div className="title">Quiz Session</div>
     