import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql} from 'gatsby';
// import { StaticQuery } from 'gatsby';

// const Avatar = () => (
//     <StaticQuery 
//         query={
//             graphql`
//             query avatarImageQuery {
//                 avatarImage: file(relativePath: { eq: "photo-perfil.png" }) {
//                     childImageSharp {
//                     fixed(width:60, height: 60) {
//                         ...GatsbyImageSharpFixed
//                     } 
//                     }
//                 }
//             }`}
//             render={
//                 ({avatarImage: {childImageSharp: {fixed}}}) => <Img fixed={fixed} />
//             }
//     />
// )

const Avatar = () => {
    const { 
        avatarImage:{
            childImageSharp:{
                fixed 
            }
        } 
} = useStaticQuery(
        graphql`
            query avatarImageQuery {
                avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
                    childImageSharp {
                       fixed(width:200, height: 200) {
                           ...GatsbyImageSharpFixed_tracedSVG
                       } 
                    }
                }
            }
        `
    )
    return (
        <Img 
            fixed={fixed} 
            fadeIn
            durationFadeIn={5000}
            />
        )
};

export default Avatar;