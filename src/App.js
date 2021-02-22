import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBar } from './components/search-bar/search-bar-component'
class App extends Component{
  constructor(){
    super()

    this.state = {
      string : "Hello this is Stacy Lafume",
      techies: [],
      clips:[],
      tags:[],
      searchField:""
    }

  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => (response.json()))
    .then(users => this.setState({techies: users}))

    fetch('https://pixabay.com/api/videos/?key=20243699-8dd32fb2842c55ef0668a4b0c&q=flowers')
    .then(response => (response.json()))
    .then( videos =>this.setState({clips:videos.hits.map((v, i)=>[v.videos.tiny.url, i+100 ])}) )

    fetch(`https://pixabay.com/api/videos/?key=${process.env.REACT_APP_KEY}&q=flowers`)
    .then(response => (response.json()))
    .then( tags =>this.setState({tags:tags.hits.map((t, i)=>[t.tags.split(",")[0], i + 100])}) )

  }
  
 handleChangeInput = e =>{
   this.setState({searchField: e.target.value})
 }

  render(){
    const { tags, searchField} = this.state
    const filteredTags = tags.filter((tag, i) => tag[0].toLowerCase().includes(searchField.toLowerCase()))
    console.log('filteredTags',filteredTags)
    return (
      <div className="App">
        <h1>Flowers Rolodex</h1>
        <SearchBar placeholder="Filter Here" handleChangeInput={this.handleChangeInput} />
        <CardList tags={tags} techies={filteredTags}  clips={this.state.clips} tags={this.state.tags}/>
       
      </div>
    );
  }
}

export default App;
