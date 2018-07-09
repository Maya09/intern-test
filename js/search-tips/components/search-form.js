import React, { Component } from 'react';
import SearchTips from '../components/search-tips';

class SearchForm extends  Component {
  constructor(props){
    super(props);

    this.filterList = this.filterList.bind(this);
    this.state = {
      initialItems: this.props.data,
      items: [],
      inputValue: '',
      numberToRender: 5
    }
  }
  filterList(event){
    let inputValue = event.target.value;
    let updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        inputValue.toLowerCase()) !== -1;
    });
    updatedList = updatedList.filter(function(item){
      let isUpperCase = item.toUpperCase()==item;
      return isUpperCase === true && item
    });
    updatedList.sort(function(a, b){
      if(a.length < b.length) return -1;
      if(a.length > b.length) return 1;
      return 0;
    });
    updatedList.sort(function(a, b){
      if(a < b) return -1;
      if(a > b) return 1;
      return 0;
    });
    // console.log(updatedList);
    this.setState({
      items: updatedList,
      inputValue
    });
  };
  render()  {
    return(
      <section>
        <h1>Поисковые подсказки</h1>
        <input className="search-input" type="search" onChange={this.filterList}/>
        {this.state.items && this.state.items.length !=0 
          && this.state.inputValue != '' 
          && <SearchTips 
                items={this.state.items}
                numberToRender={this.state.numberToRender}
            />}
      </section>
    )
}
  }
export default SearchForm;