import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from '../actions';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
})

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});

const App = ({store, searchField, onSearchChange, onRequestRobots, robots, isPending}) => {


  useEffect(() => {
    onRequestRobots();
  }, [])



  const filteredList = robots.filter(item => item.name.toLowerCase().includes(searchField));


  return (  
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox onChange={onSearchChange} />
      {isPending ? (
        <h2>Loading..</h2>
      ) : (
        <Scroll>
          <CardList cards={filteredList} />
        </Scroll>
      )}
    </div>
  );
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);