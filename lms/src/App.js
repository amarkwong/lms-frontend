import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import { AccessAlarm, ThreeDRotation,User } from '@material-ui/icons';
// import { CourseCard,SimpleModalWrapped } from './components';
import CourseCard from './components/CourseCard';
import CourseModal from './components/CourseModal';
import NavBar from './components/NavBar';
import 'typeface-roboto';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar></NavBar>
      <h1>Heading</h1>
      <AccessAlarm></AccessAlarm>
      <ThreeDRotation></ThreeDRotation>
        <CourseCard ImageRef="https://i.imgur.com/Ld4fkyJ.jpg"></CourseCard>
        <CourseModal></CourseModal>
      </div>
    );
  }
}

export default App;
