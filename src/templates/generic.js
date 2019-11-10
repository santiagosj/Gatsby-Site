import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Generic from '../components/Generic'

export const query = graphql`
 query($slug:String) {
        genericsJson(slug:{eq:$slug}) {
            title
            description
            imggne {
                childImageSharp {
                  original {
                    src
                  }
                }
              }
        }
    }
`;

const GenericTemplate = ({ data:{genericsJson:generic } }) => {
    
    const title = generic.title;
    const description = generic.description
    const imageData = generic.imggne.childImageSharp.original.src

    return(
        <Layout>
            <Generic
               title={title}
               description={description}
               imageData={imageData}
            />
        </Layout>
    )
}

export default GenericTemplate