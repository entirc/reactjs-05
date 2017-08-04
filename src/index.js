import React from 'react'
import ReactDOM from 'react-dom'

class Person extends React.Component{
  constructor () {
  //  console.log("Constructor")
    super()
    this.state = {
      email: '',
      password: ''
    }
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
    //console.log("Node Livro: ", ReactDOM.findDOMNode(this.refs.livro))
  }

  /************* Segunda Fase ********************/

  componentWillReceiveProps(nextProps) {
    //console.log("this.props.email ",this.props.email)
    //console.log("componentWillReceiveProps: ",nextProps.email)
   // console.log(this.props)
    //this.props.name = "Michel";

  /*  this.setState({
      email:nextProps.email
    })*/
  }

  shouldComponentUpdate(nextProps, nextState){
    //console.log("shouldComponentUpdate nextProps ",nextProps)
   // console.log("shouldComponentUpdate nextState ",nextState)
/*
    this.setState({
      email:nextState.email="TESTE"
    })
*/
 /*   if(this.props.email!=nextProps.email || this.state.email!=nextState.email){
     // console.log('TRUE')
      return true
    }else{
      return false
    }*/

  // return false
  }

  componentWillUpdate(nextProps, nextState){
   // console.log("componentWillUpdate nextProps ",nextProps)
   // console.log("email valor no input ", this.state.email)
   // console.log("componentWillUpdate nextState ",nextState)
    //let temArroba = (nextState.email).includes("@")
    //console.log("temArroba " + temArroba)
/*
    this.setState({
      email:nextState.email="TESTE"
    })
   */
  }

  componentDidUpdate(prevProps, prevState){
   // console.log("componentDidUpdate prevProps ",prevProps)
    //console.log("email valor no input ", this.state.email)
   // console.log("componentDidUpdate prevState ",prevState)
  }

  /************* Terceira Fase ********************/


  render(){
    console.log("this Person: ", this)
    console.log("render this.props: ", this.props)
    console.log("render this.state: ", this.state)
    return(
      <div>  
        <h1 ref="titulo"> ENTI - Aprendendo React #5 </h1>
 
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
        <label id="labelEmail" ref="em">email: </label><input type="text" onChange={ this.handleChange } />
        <Person />
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

  componentDidMount() {
    //console.log("Node Livro: ", ReactDOM.findDOMNode(this.refs.livro))
  }

  render(){
    //console.log("this Links: ", this)
    //habilite para gerar o erro.
    //this.setState({ foo: 'bar' });
    return(
      <div> 
        <br/>
        <a ref="livro" href="https://www.gitbook.com/book/developmentarc/react-indepth/details" target="_">react-indepth</a>
        <br/><br/>
        <img src="/assets/images/lifecycle.png" />
        <br/><br/>
        <img src="/assets/images/initialRender.png" />
        <br/><br/>
        <img src="/assets/images/stateChange.png" />&nbsp;
        <img src="/assets/images/propsChange.png" />
        <br/><br/>
        <img src="/assets/images/unmount.png" />
        <br/><br/>
        <img src="/assets/images/react-lifecycle-flow-chart-states.png" />
        <br/><br/>
        <a href="https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/" target="_">An Introduction to Life Cycle Events in React</a>
        <br/>
        <a href="https://stackoverflow.com/questions/30668326/what-is-the-difference-between-using-constructor-vs-getinitialstate-in-react-r" target="_">What is the difference between using constructor vs getInitialState in React / React Native?</a>
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
