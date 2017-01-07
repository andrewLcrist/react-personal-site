import React, { Component } from 'react';
import npa from '../images/no-poster.png'
import firebase from '../firebase';
import { pick, map, extend } from 'lodash';
import PersonalMovieCard from './PersonalMovieCard'


export default class MyMovies extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      movies: []
    }
  }

  componentWillMount() {
   let user = this.props.user
   this.setState({ user })
  }

  componentDidMount() {
    firebase.database().ref('users/' + this.state.user.displayName).on('value', (snapshot) => {
      const movies = snapshot.val()
      // console.log(map(movies, (val, key) => extend(val, { key })));
      this.setState({
        movies: map(movies, (val, key) => extend(val, { key }))
      });
    });
  }

  render() {
    let movieDisplay = this.state.movies.map(m => <PersonalMovieCard {...m} key={m.key}/>)

    return (
      <div>
        {movieDisplay}
      </div>
    )
  }
}
