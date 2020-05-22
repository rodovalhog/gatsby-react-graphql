import React from 'react';
import { useStaticQuery, graphql} from 'gatsby';
import * as S from './styled'


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
                       fixed(width:100, height: 100) {
                           ...GatsbyImageSharpFixed_tracedSVG
                       } 
                    }
                }
            }
        `
    )
    return (
        <S.AvatarWraper 
            fixed={fixed} 
            fadeIn
            durationFadeIn={5000}
            />
        )
};

export default Avatar;