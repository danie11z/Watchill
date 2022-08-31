import React, {Component} from "react"
import Simbolo from "../assets/logo.png"
import Banner from "../assets/banner.webp"
import styled from "styled-components"
import {createGlobalStyle} from "styled-components"

import Home from "../Services/Home"
import Movies from "../Services/Movies"
import {BrowserRouter, Link, Routes, Route} from "react-router-dom"

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #FFFFFF;
    }
`;

const Topo = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 20vh;
    border-bottom: solid;
    background-image: url(${Banner});
`;

const Logo = styled.img`
    width: 6vw;
`;

const Lista = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 40vw;
`;

const LinkS = styled(Link)`
    text-decoration: none;
    font-size: 1.4vw;
    

    &:hover{
        font-weight: 700;
    }
`;

const Li = styled.li`
    width: 14.9%;
`

export default class Header extends Component{
    render(){
        return(
            <BrowserRouter>
            <GlobalStyle />
                <Topo>
                    <div>
                        <Logo src={Simbolo} alt="Claquete de cinema" />
                    </div>
                    <nav>
                        <Lista>
                            <Li>
                                <LinkS to="/" title="Início">Início</LinkS>
                            </Li>
                            <Li>
                                <LinkS to="/filmes" title="Filmes">Filmes</LinkS>
                            </Li>
                            <Li>
                                <LinkS to="/series" title="Séries">Séries</LinkS>
                            </Li>
                        </Lista>
                    </nav>
                </Topo>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/filmes" element={<Movies />} />
                    <Route />
                </Routes>
            </BrowserRouter>
        )
    }
}