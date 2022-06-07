import { ButtonHTMLAttributes, MouseEventHandler, useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTrasactionModelOpen: ()=> void;
}

export function Header( {onOpenNewTrasactionModelOpen }: HeaderProps) {
   
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTrasactionModelOpen}>
                    New Transaction
                </button>
            </Content>
        </Container>
    )
}