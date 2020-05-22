import React from 'react';
import linksContent from './content'
import * as S from './styled'


const MenuLinks = () => (
    <S.MenuLinkWrapper>
        <S.MenuLinksList>
            {renderLinksContent}
        </S.MenuLinksList>
    </S.MenuLinkWrapper>
)

const renderLinksContent = linksContent.map( item => (
    <S.MenuLinksItem key={item.label}>
        <S.MenuLinksLink 
            to={item.url }
            activeClassName="active"
        >
            {item.label}
        </S.MenuLinksLink>

    </S.MenuLinksItem>
))

export default MenuLinks;