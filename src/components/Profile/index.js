import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar';

//HOOKS
const Profile = () => {
   const {site: {
       siteMetadata: {
           title,
           position,
           author,
           description}}
        } = useStaticQuery(graphql`
        query MyQuerySiteMetadata {
            site {
                siteMetadata {
                    author
                    position
                    description
                    title
                }
            }
        }`)
        return (
            <div className="Profile-wrapper">
                <Avatar />
                <h1>{title}</h1>
                <h2>{author}</h2>
                <h3>{position}</h3>
                <p>{description}</p>
        </div>)
}


//POR COMPONENTE.
// const Profile = () => (
//     <StaticQuery
//         query={graphql`
//         query MyQuerySiteMetadata {
//             site {
//                 siteMetadata {
//                     author
//                     position
//                     description
//                     title
//                 }
//             }
//         }`}
//         render={({site: {siteMetadata: {title, position,author, description}}}) => (
//                 <div className="Profile-wrapper">
//                     <h1>{title}</h1>
//                     <h2>{author}</h2>
//                     <h3>{position}</h3>
//                     <p>{description}</p>
//                 </div>)
//         }/>
// )

export default Profile;