import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      lang:"arm"
    }
  }


componentDidMount(){
  let body ={array:[this.state.lang,[]]}

  document.querySelectorAll('p').forEach(elem=>{
    elem.setAttribute("className",`forTranslate${1}`)
    body.array[1].push(['lang',`${elem.textContent}`])

  })
  console.log(body)
  fetch('/createText',{
    method:"POST",
    headers:new Headers({"Content-type":"application/json"}),
    body:JSON.stringify(body)
  }).then(res=>res.json()).then(data=>{console.log(document.querySelectorAll('p')[0].innerHTML=data.lang)
   console.log(data)})
}




  render() {
    console.log(this.state.lang)
    const changeRussian=()=>{
      this.setState({
        lang:"ru"
      })
    }
    const changeAmerican=()=>{
      this.setState({
        lang:"eng"
      })
    }
    return (
      <div>
        <p>Hayeren</p>
        <button onClick={()=>{changeRussian()}}>Ruseren</button>
        <button onClick={()=>{changeAmerican()}}>Angleren</button>

      </div>
    )



  }
}

