import React from 'react';
import './App.css';
import data from './data'

class PuppyStore extends React.Component {
  state={
    data:[],
    filter:''
  }

  componentDidMount(){
    this.setState({data:data})
  }
  handleLike=(id)=>{
    const like = this.state.data.map(el=>{
      if(el.id===id){
        return Object.assign({},el,{
          likes: el.likes +1
        } )
      } else{
        return el
      }
    })
    this.setState({data:like})
  }
  alphabeticalSort=()=>{
    this.setState(
      this.state.data.sort((a,b)=>a.name.localeCompare(b.name)))
    }
  likeSort=()=>{
    this.setState(
      this.state.data.sort((a,b)=>b.likes-a.likes)
    )
  }
  handleChange=(event)=>{
    console.log(this.handleChange)
    this.setState({filter: event.target.value})
  }
  render(){
    const filter = this.state.filter;
    
    return (
      <div>
        <h1>Puppy Store</h1>
        <input  className='search' placeholder='SEARCH' value={filter} onChange={this.handleChange}></input>
            <button onClick={this.alphabeticalSort}value ='likes' selected>Alphabetical</button>
            <button onClick={this.likeSort}value ='likes' selected>Popularity</button>
           
            
        <div className='container'>
        <DisplayItem  data={this.state.data} handleLike={this.handleLike} filter={this.state.filter}/>

        </div>
        
      </div>
    )

  }
  
}

class DisplayItem extends React.Component{

  render(){
    let items = this.props.data
    const filter = this.props.filter;
    console.log(filter)
    const lowercasedFilter= filter.toLowerCase();
    const filteredData=items.filter(item=>{
      return Object.keys(item).some(key=>
        typeof item[key]=== 'string' && item[key].toLowerCase().includes(lowercasedFilter)
        )
    })
  
    
    return(
      filteredData.map(el=>{
        return(
          <div className='card' key={el.id}>
            <div className='name'>{el.name}</div>
            <div className='description'><b>Description:</b> <br/><br/>{el.description}</div>
            <div className='image'>
                <img className='images' src={el.img}></img>
            </div>
              
              <div className='price'>{el.price}</div>
              <div>
              <button className='likeButton' onClick={()=>this.props.handleLike(el.id)}>Like</button>
              <div>{el.likes}</div>


              </div>
              
            
            
          </div>
        )
  
      })
     

    )
  
    
  }
}

export default PuppyStore;
