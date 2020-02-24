import React from 'react'
import {mainPg,contact, flexChild} from '../../style/style.module.css'

class Contact extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className={contact}>
        <article className={flexChild}>
          <h1>Contact Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus quam voluptatem illo culpa earum quis. Excepturi id rerum aliquid 
            laudantium molestiae? Quod, dignissimos libero possimus 
            numquam facilis debitis dolor quis?</p>
        </article>
        <section className={flexChild} >          
          <h2>Shumai OA </h2>
          <p>UK</p>
          <p> Tel: +44 755 628 496</p>
          <p>Email: Home@homey.com </p>
        </section>
      </div>
    )
  }
}

export default Contact;