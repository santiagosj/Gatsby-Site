exports.createPages = async ({actions, graphql, reporter}) => {
    
    const result = await graphql(`
     {
        allGenericsJson {
            edges {
              node {
                slug
              }
            }
          }
     }
  `
);

    if(result.error){
        reporter.panic('problema al cargar la página generica')
        return;
    }

    const generics = result.data.allGenericsJson.edges;

   generics.forEach(({node:{slug}}) =>{
     actions.createPage({
       path:`/${slug}/`,
       component:require.resolve('./src/templates/generic.js'),
       context: {
         slug
       }
     })
   } ) 
    
}
