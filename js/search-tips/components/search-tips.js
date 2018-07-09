import React, { Component } from 'react';

class SearchTips extends Component {
  constructor(props){
    super(props);
  };
  componentWillMount(){

  };
  render(){
    let items = this.props.items.map(function(item,i) {
      if (i < 5) {
       return <li className="list-group-item" data-category={item} key={item}>{item}</li>
      }
    }); 
    return(
      <div className="search-tips" id='searchTips'>
        SearchTips
        <ul className="list-group">
            {items}
            </ul>
      </div>
      )
  }
}

export default SearchTips;
