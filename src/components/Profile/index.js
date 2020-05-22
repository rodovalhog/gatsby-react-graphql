import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar';
import * as S from './styled'

//HOOKS
const Profile = () => {
   const {site: {
       siteMetadata: {
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
                }
            }
        }`)
        return (
            <S.ProfileWrapper>
                <S.ProfileLink>
                    <Avatar />
                        <S.ProfileAuthor>
                            {author}
                            <S.ProfilePosition>{position}</S.ProfilePosition>
                        </S.ProfileAuthor>
                </S.ProfileLink>
                        <S.ProfileDescription>{description}</S.ProfileDescription>
               
        </S.ProfileWrapper>)
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