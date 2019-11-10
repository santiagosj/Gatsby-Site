import React from 'react';
import { graphql } from 'gatsby'

import Layout from '../components/layout';
import Generic from '../components/Generic'

export const query = graphql`
{
  servicesJson {
  title
  description
  image {
     childImageSharp {
       original {
         src
       }
     }
   }
 }
}
`;

const SecondPage = ({data:{servicesJson:service}}) => {

  const title = service.title;
  const description =  service.description
  const imgData = service.image.childImageSharp.original.src
  
  return (
    <Layout>
       <Generic
         title={title}
         imageData={imgData}
         description={description}
       />
  </Layout>
  )
}
 
export default SecondPage;
