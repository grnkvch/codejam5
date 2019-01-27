import React, { Component } from 'react';
import './index.css';
import data from '../../codejam5.json';
import BiographyTimeLine from '../../components/timeline/biography-time-line';
import Gallery from '../../components/gallery/gallery';
import YandexMap from '../../components/map/YandexMap';
import Youtube from '../../components/video/youtube';


export default class Author extends Component {
  getListingBooks = () => data[this.props.lang].autors[this.props.testName].productList.map((e, i) => {
    return <li key={i}>{e}</li>
  })
  
  render() {
    console.log(data[this.props.lang].autors[this.props.testName])
    return (
      <>
      <section className="about-author">
        <img 
          src={process.env.PUBLIC_URL + (data[this.props.lang].autors[this.props.testName].image)}
          alt={data[this.props.lang].autors[this.props.testName].name}
          width="200"
          height="200"
        />
        <p className="about-author-text">{data[this.props.lang].autors[this.props.testName].about}</p>
      </section>
      <BiographyTimeLine lang={this.props.lang} autorName={this.props.testName}/>
      <ul>
        {this.getListingBooks()}
      </ul>
      <Gallery />
      <Youtube lang={this.props.lang} autorName={this.props.testName}/>
      <YandexMap lang={this.props.lang} autorName={this.props.testName}/>
      </>
    )
  }
}