//react router stuff
import React , {Component} from 'react';
//BrowserRouter can be said as brain of react router of how to behave and changes components
//route is rule for deciding what components need to be visible on screen
import {BrowserRouter , Route} from 'react-router-dom';
//reat and redux library connect action creator
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
//functional components
const Dashboard =  () => <h2> Dashboard</h2>;

const SurveyNew=  () => <h2> Survey New</h2>;
//browser router expects atmost one child
class App extends Component{
  componentDidMount(){
    this.props.fetchUser();
  }
render(){
  return (
    <div className="container">
      <BrowserRouter>
          <div>
            <Header />
            <Route exact path= "/" component = {Landing}/>
            <Route exact path= "/surveys" component = {Dashboard}/>
            <Route path= "/surveys/new" component = {SurveyNew}/>
          </div>
      </BrowserRouter>
    </div>
  );
}
}
export default connect(null,actions)(App);
