import React from 'react'
import ReactDOM from 'react-dom'

class Person extends React.Component{
  constructor () {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  //adicionando atributos no props
  static get defaultProps() {
    return {
        name: '????',
        age: 35
    }
  }

  componentWillMount() {
    let mode;
    //this.setState({ foo: 'bar' });
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

  componentWillReceiveProps(nextProps) {
    console.log("this.props.email ",this.props.email)
    console.log("componentWillReceiveProps: ",nextProps.email)
    this.setState({
      email:nextProps.email
    })
  }


  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate nextProps ",nextProps)
    console.log("shouldComponentUpdate nextState ",nextState)
    if(this.props!=nextProps || this.state!=nextState){
      return true
    }else{
      return false
    }
  }

  render(){
   // console.log("this Person: ", this)
    console.log("this.props: ", this.props)
    console.log("this.state: ", this.state)
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
    this.state        = { email: '' } ;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.currentTarget.value });
  }

  render() {
    return (
      <div>
        <label>email: </label><input type="text" onChange={ this.handleChange } />
        <Person email={ this.state.email } />
      </div>
    );
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
