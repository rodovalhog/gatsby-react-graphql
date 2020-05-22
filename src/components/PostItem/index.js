import React from 'react';

import * as S from './styled';

const PostItem = (props) => {

const postList = props.data.allMarkdownRemark.edges;

    return postList.map( 
        ({    
            node: { 
                fields: { slug },
                timeToRead,
                frontmatter : {background, category, date, dscription, title}
            },
        }, index) => {

        return (
            <S.PostItemLink key={index} to={slug}>
                <S.PostItemWrapper>
                    <S.PostItemTag background={background}>
                        {category}
                    </S.PostItemTag>
                    <S.PostItemInfo>
                        <S.PostItemDate>
                            {date}
                        </S.PostItemDate>
                        <S.PostItemTitle>
                            {title}
                        </S.PostItemTitle>
                        <S.PostItemDescription>
                            {dscription}
                        </S.PostItemDescription>
                    </S.PostItemInfo>
                </S.PostItemWrapper>
            </S.PostItemLink>
        )
    })
}


export default PostItem;