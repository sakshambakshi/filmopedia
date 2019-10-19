import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import BasicCategories from '../components/BasicCategories';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <BasicCategories />
      </div>
    )
  }
}
