import {Component} from 'react'
import DisplayRecords from './DisplayRecords'
// import Spinner from 'react-bootstrap/Spinner'

import './App.css';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          items: [],
          DataisLoaded: false,
          searchInput:'',
        
      };
  }
 
   getTheData =()=>{
    fetch("https://gorest.co.in/public/v2/users")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  items: json,
                  DataisLoaded: true
              });
          })
  }

  componentDidMount() {
    this.getTheData()
  }

  onSearchInput =event =>{
    if (event.target.value.length >=3) {
      this.setState({searchInput:event.target.value})
    }else{
      this.setState({searchInput:''})
    }
  }

  

  render() {
      const { items,DataisLoaded,searchInput } = this.state; 
      const filteredList = items.filter(each=> each.gender.toLowerCase().includes(searchInput.toLowerCase()))
      
      if (!DataisLoaded) return 
      
          <h1> Pleses wait some time.... </h1> 

 
      return (
      <div className = "App">
          <h4 className="headingEl"> Displaying Data from <mark><a href='https://gorest.co.in/public/v2/users'>GOREST.com</a></mark> </h4>  
          
          <input type="search" placeholder="Please enter your Criteria" name="Search" className='searchInput' onChange={this.onSearchInput}/>
          {
              
              <table> 
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender </th>
                  <th>Status</th>
                </tr>
                {filteredList.map(each=>
                 ( <DisplayRecords data={each} key = {each.id} />)
                )}
              </table>
          }
      </div>
  );
}
}
 
export default App;