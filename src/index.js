import React from 'react'
import ReactDOM from 'react-dom'

import $ from 'jquery'

class Person extends React.Component{
  constructor () {
  //  console.log("Constructor")
    super()
    this.state = {
      email: '',
      password: ''
    }
   // console.log("this state: ", this)
  }

  static get defaultProps() {
  //  console.log("defaultProps")
    return {
        name: '????',
        age: 35
    }
  }


  componentWillMount() {
    let mode;
    this.setState({ foo: 'bar' });
    //console.log("Node: ", ReactDOM.findDOMNode(this.refs.titulo))
   // console.log("this willMount: ", this)
    if (this.props.age > 80) {
      mode = 'old';
    } else if (this.props.age < 18) {
      mode = 'teenager';
    } else {
      mode = 'adult';
    }
    this.setState({ mode });
  }


  componentDidMount() {
    //console.log("Node Título: ", ReactDOM.findDOMNode(this.refs.titulo))
   // console.log("Node Livro: ", ReactDOM.findDOMNode(this.refs.livro))
  }

  /************* Segunda Fase ********************/

  componentWillReceiveProps(nextProps) {
    //console.log("this.props.email ",this.props.email)
   // console.log("componentWillReceiveProps: ",nextProps.email)
    //this.props.name = "Michel";

    this.setState({
      email:nextProps.email
    })
  }

  
  shouldComponentUpdate(nextProps, nextState){
   // console.log("shouldComponentUpdate nextProps ",nextProps)
   //console.log("shouldComponentUpdate nextState ",nextState)
/*
    this.setState({
      email:nextState.email="TESTE"
    })
*/
    if(this.props.email!=nextProps.email || this.state.email!=nextState.email){
      //console.log('TRUE')
      return true
    }else{
      return false
    }

  // return true
  }


  componentWillUpdate(nextProps, nextState){
    //console.log("componentWillUpdate nextProps ",nextProps)
   // console.log("this.state ", this.state.email)
    //console.log("componentWillUpdate nextState ",nextState.email)
   // let temArroba = (nextState.email).includes("@")
    //console.log("temArroba " + temArroba)
/*
    this.setState({
      email:nextState.email="TESTE"
    })
   */
  //console.log("Node Título: ", ReactDOM.findDOMNode(this.refs.titulo))
  }

  componentDidUpdate(prevProps, prevState){
   // console.log("componentDidUpdate prevProps ",prevProps)
    //console.log("this.state ", this.state.email)
    //console.log("componentDidUpdate prevState ",prevState.email)
  }

  /************* Terceira Fase ********************/


  render(){
    //console.log("this Person: ", this)
    console.log("render this.props: ", this.props)
    console.log("render this.state: ", this.state)
    return(
      <div>  
        <h1 ref="titulo"> ENTI - Aprendendo React #5 </h1>
        <p>O email é: {this.state.email}</p>
      </div>
    )
  }

}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' } ;
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount(){
    console.log("componentWillUnmount ")
  }

  handleChange(event) {
    let valorDigitado = event.currentTarget.value
    this.setState({ email: valorDigitado });
   // console.log("AQUI ",  ReactDOM.findDOMNode(document.getElementById("app")))
   // ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(document.getElementById("app")))
  }

  montar(){
    ReactDOM.render(
      <div>
        <MeuNome />
      </div>,
      document.getElementById('meuNome')
    )
  }

  desmontar(){
    ReactDOM.unmountComponentAtNode(document.getElementById('meuNome'))
  }

  render() {
    //console.log("Render Form")
    return (
      <div>
        <button onClick={this.montar}>Montar</button>&nbsp;
        <button onClick={this.desmontar}>Desmontar</button>&nbsp;
        <div id="meuNome"></div>
        <br/>
        <label id="labelEmail">email: </label><input type="text" onChange={ this.handleChange } />
        <Person email={ this.state.email } />
      </div>
    );
  }
}


class MeuNome extends React.Component{
  componentWillUnmount(){
    console.log("desmontou o componente ")
  }

  render(){
    return(
      <h1>Michel Adriano Medeiros</h1>
    )
  }
}

class Links extends React.Component{
  constructor(props){
    super(props)
    this.state={
      users:[]
    }
  }

  componentDidMount() {
   // console.log("Node Livro: ", ReactDOM.findDOMNode(this.refs.livro))
/*
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      success: (data) =>{
        this.setState({
          users:data
        })
      }
    })
    */
  }

  render(){
    //console.log("this Links: ", this)
    //this.setState({ foo: 'bar14' });
    //console.log(ReactDOM.findDOMNode(this.refs.livro))
    const { users } = this.state
    return(
      <div>
        <ul>
          {
            users.map((user)=>{
              return <li key={user.id}>{user.name}</li>
            })
          }
        </ul>
        <br/>
        <a ref="livro" href="https://www.gitbook.com/book/developmentarc/react-indepth/details" target="_">react-indepth</a>
        <br/><br/>
        <img src="/assets/images/lifecycle.png" />
        <br/><br/>
        <img src="/assets/images/initialRender.png" />&nbsp;
        <a href="https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/birth/managing_children_components_and_mounting.html" target="_">Managing Children Components and Mounting</a>
        <br/><br/>
        <img src="/assets/images/stateChange.png" />&nbsp;
        <img src="/assets/images/propsChange.png" />
        <br/><br/>
        <img src="/assets/images/unmount.png" />
        <br/><br/>
        <img src="/assets/images/react-lifecycle-flow-chart-states.png" />
        <br/><br/>
        <a href="https://www.kirupa.com/react/lifecycle_example.htm" target="_">Exemplo do Livro</a>
        <br/>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <Form />
    <Links/>
  </div>,
  document.getElementById('app')
)
