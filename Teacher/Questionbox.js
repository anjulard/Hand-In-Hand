import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../../CSS/QuestionBox.css';
import axios from "axios";

class QuestionBox extends Component{
        state={
                question:'',
                answer_a:'',
                answer_b:'',
                answer_c:'',
                answer_d:''


        }

        questionChange=(e)=>
        {
        this.state.question=e.target.value;
        }


        answer_aChange=(e)=>
        {
        this.state.answer_a=e.target.value;
        }


        answer_bChange=(e)=>
        {
        this.state.answer_b=e.target.value;
        }


        answer_aChange=(e)=>
        {
        this.state.answer_c=e.target.value;
        }
        
        answer_aChange=(e)=>
        {
        this.state.answer_d=e.target.value;
        }

        onSubmit=()=>{

                
              
                const passingObject = {
                  question: this.state.question,
                  answer_a: this.state.answer_a,
                  answer_b: this.state.answer_b,
                  answer_c:this.state.answer_c,
                  answer_d:this.state.answer_d
                };
              
                axios.post('http://localhost:9000/api/add', passingObject)
                .then(res => console.log(res.data));
               
                
                this.setState({
                question: '',
                answer_a  : '',
                answer_b: '',
                answer_c:'',
                answer_d:''
                })


        }

    render(){ 
        return(
                      
<div className='QuestionBox'>
     <p><b>ප්‍රශ්නය ඇතුළත් කරන්න</b></p>
     <textarea onChange={this.questionChange}></textarea>
      <p><b>පිළිතුර a</b></p>
      <input type='text' onChange={this.answer_aChange}></input>
      <p><b>පිළිතුර b</b></p>
      <input type='text' onChange={this.answer_bChange}></input>
      <p><b>පිළිතුර c</b></p>
      <input type='text' onChange={this.answer_cChange}></input>
      <p><b>පිළිතුර d</b></p>
      <input type='text' onChange={this.answer_dChange}></input><br/><br/>
      
      <input type='submit' onClick={this.onSubmit}></input>

</div>
        )}}
export default QuestionBox