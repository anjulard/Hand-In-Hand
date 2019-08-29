import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionBox from './Questionbox'
import '../../CSS/QuestionForm.css'


class Maincontainer extends Component {
  
  state={
   
  }

  render(){
    return (
    <div className="Maincontainer">
    <div className="title">ප්‍රශ්නය</div>
    <QuestionBox></QuestionBox>

     
   
     
      
    </div>
  );
}}

ReactDOM.render(<Maincontainer/>,document.getElementById("root"));


export default Maincontainer;