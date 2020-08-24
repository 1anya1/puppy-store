import React from 'react';
import './App.css';
import data from './data'

class PuppyStore extends React.Component {
  state={
    data:[],
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
  render(){
  
    console.log(this.state.data)
    return (
      <div>
        <h1>Puppy Store</h1>
        <div className='container'>
        <DisplayItem  data={this.state.data} handleLike={this.handleLike}/>

        </div>
        
      </div>
    )

  }
  
}

class DisplayItem extends React.Component{

  render(){
    let item = this.props.data
  
    
    return(
      item.map(el=>{
        return(
          <div className='card' key={el.id}>
            <div className='name'>{el.name}</div>
            <div className='description'>{el.description}</div>
           
              <img className='image' src={el.img}></img>
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
