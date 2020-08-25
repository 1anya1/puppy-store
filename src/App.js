import React from 'react';
import './App.css';
import data from './data'
import image from './heart.png'

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
  handleChangeSort=(event)=>{
    console.log(this.handleChange)
    this.setState({filter: event.target.value})
  }

  render(){
    const filter = this.state.filter;
    
    return (
      <div>
        <h1 className='header'>Puppy Store</h1>
        <div className='searchComponents'>
            <input className='search' placeholder='SEARCH' value={filter} onChange={this.handleChangeSort}></input>
            <button className='searchButton' onClick={this.alphabeticalSort} value ='alpha' >A_Z</button>
            <button className='searchButton' onClick={this.likeSort}value ='likes' >Popularity</button>
        </div>      
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
            <div className='name'>
              <h2>{el.name}</h2>
              <button className='likeButton' onClick={()=>this.props.handleLike(el.id)}>
                <p className='totalLikes'>{el.likes}</p>
              </button>
            </div>
            <div className='description'>
              <h3 className='description-header'>Description:</h3>
                <br/><br/>
                  {el.description}
                  <br/><br/>
                  <b>{el.price}</b>
            </div>
            <div className='image'>
                <img className='images' src={el.img}></img>
            </div>
              <div className='add-to-cart'>
              <button className='cart-button'>Add To Cart</button>
            </div>    
          </div>
        )
      })
    )  
  }
}

export default PuppyStore;
