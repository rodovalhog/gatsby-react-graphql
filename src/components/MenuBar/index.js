import React from 'react'
import IconsFirst from './Icon';
import IconsSecond from './IconsSecond'
import contentGroupFirst from './contentGroupFirst';
import contentGroupSecond from './contentGroupSecond'
import * as S from './styled'

const MenuBar = () => (
    <S.MenuBarWrapper>
        <S.MenuBarGroup>
            {renderIcons(contentGroupFirst, IconsFirst)}
        </S.MenuBarGroup>
        <S.MenuBarGroup>
            <S.MenuBarLink>
            {renderIcons(contentGroupSecond, IconsSecond)}
            </S.MenuBarLink>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>
)

const renderIcons = (items,Icons) => items.map( item => {
        const Icon = Icons[item.name]
        return (
            <S.MenuBarLink 
                key={item.name} 
                to={item.url} 
                title={item.label}
            >
                <S.MenuBarItem>
                    <Icon/>
                </S.MenuBarItem>    
            </S.MenuBarLink>
        )
    })

export default MenuBar;