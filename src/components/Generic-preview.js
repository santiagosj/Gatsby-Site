import React from 'react'
import { Link } from 'gatsby'


const GenericPreViewComponent = ({title, description, slug, imageData}) => (
 
    <section> 

        <a href="/#" className="image" alt="image">
           <img src={imageData} alt={title} data-position="center center"/>
        </a>
       
        <div className="content">
          
           <div className="inner">

              <h2>{title} </h2>

              <p> {description} </p>
              
              <ul className="actions">
                <li>
                   <Link to={`/${slug}/`} className="button">
                      Leer más
                   </Link>
                </li>
             </ul>
          
           </div>
        
        </div>
 
    </section>

)

export default GenericPreViewComponent