import * as actions from '../actions/search-actions';
import data from '../data/words';
import SearchForm from '../components/search-form';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchContainer extends Component {
  render() {
    // let  inputvalue  = this.props;
    return <div>
        <SearchForm data={data}/>
    </div>
  }
}

// function mapStateToProps (state) {
//   return {
//     inputvalue: state.inputvalue
//   }
// }

// export default connect(mapStateToProps)(SearchContainer)

// const mapStateToProps = state => ({
    
// });

// const mapDispatchToProps = dispatch => ({

// });

// const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchForm);

export default SearchContainer;
