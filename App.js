import React from 'react'

class App extends React.Component {
  constructor() {
    super();
  this.state = {
    user:[],
    loading:'true',
    hello:''
  };
  }
  async componentDidMount(){
    const url = 'https://course-api.com/react-store-products';
    const res = await fetch(url);
    const result = await res.json();
    const data = result.map( (nameObj) => nameObj.name )
    this.setState({user:data, loading:false})
    console.log(result);
  }
 searchfun=(e) =>{this.setState({hello:e.target.value})}


  render() {
    if (this.state.loading) {
      return(
        <div id='refresh'>
          loading....
        </div>
      );
      
    } else {
      return (
        <div>
        <div id='nav'>
          <p id='aproval'>aproval list</p>
        <input type= "text" placeholder='search' onChange={ this.searchfun }></input>
        {/* <p id ="change" >{this.state.hello}</p> */}
        </div>
        <div id='filter'>
        { 
        this.state.user.filter(name => name.includes(this.state.hello)).map(fun => <p id='names'>{fun}</p> )}
        {/* {this.state.user.map(fun => <p>{fun}</p>  )} */}
        </div>
        </div>
      );
    }
    
  }
}

export default App