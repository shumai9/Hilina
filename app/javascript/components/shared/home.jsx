import React from 'react'
import {home,mainPg,largeFont,flexer,flexChild} from '../../style/style.module.css'

class Home extends React.Component {
  constructor(props) {
    super(props);    
  }
  render() {
    return(
      <div className={mainPg, home}>
        <h1 className={largeFont}>Home sweet Home</h1>
        <div className={flexer}>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          <article className={flexChild}> <a hrfe="#">THis is all the content </a></article>
          
        </div>          
      </div>
    )
  }
}

export default Home;