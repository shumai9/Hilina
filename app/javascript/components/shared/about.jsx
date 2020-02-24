import React from 'react'
import {mainPg,about,flexer,flexChild} from '../../style/style.module.css'

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: {},
      isLoaded: true
    }
  }
  render() {
    const data = this.state.text
    return(
      <div className={mainPg, about}>
        <div className={flexer}>
        <article className={flexChild} >
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est, 
            itaque cumque nulla distinctio eveniet voluptatem tempore alias magni
            natus. Quibusdam, vero! Ducimus a laborum sint, nobis soluta illum nostrum?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Nemo libero ab doloremque consectetur quis voluptates neque similique 
            quidem quisquam quod ipsam reiciendis tenetur incidunt nulla, temporibus,
            qui, illo nobis? Quos!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quos voluptas molestias veniam, accusamus et quisquam, corporis soluta laudantium 
            voluptatum possimus quas iusto porro odio blanditiis ipsa,
            perferendis qui? Consequuntur, sed! </p>
        </article>
        </div>
      </div>
    );
  }
}

export default About;