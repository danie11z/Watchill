import React, {Component} from "react"
import axios from "axios"
import styled from "styled-components"

const Main = styled.main`
    background-color: #000000;
`

const SearcherBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12vh;
`

const Searcher = styled.input`
    width: 20vw;
    height: 5vh;
    padding-left: 0.2vw;
    color: #000000;
`

const Box = styled.section`
    width: 99%;
`

const Painel = styled.div`
    justify-content: space-evenly;
    align-content: space-evenly;
    display: flex;
    flex-wrap: wrap;
`

const MovieBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 75vh;
`

const Poster = styled.img`
    height: 64vh;
    width: 20vw;
`

const Title = styled.h4`
    width: 16vw;
    text-align: center;
`

const theMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=95c7d7294334d74e42813e4ed736157e&language=pt-BR&page=1'
})

export default class Movies extends Component{

    componentDidMount(){
        this.getMovies()
    }

    state={
        movies: [],
        filterMovies: []
    }

    getMovies = async() => {
        const resposta = await theMovies.get()
        
        const allMovies = resposta.data.results.map((item) => {
            return{
                ...item,
                nome: item.title,
                image: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
                sinopse: item.overview,
            }
        })

        this.setState({
            movies: allMovies,
            filterMovies: allMovies
        })
    }

    handleChange = (event) => {
        const Filtered = this.state.movies.filter((item) => {
            if(item.nome.toLowerCase().includes(event.target.value.toLowerCase())){
                return true
            }else{
                return ""
            }
        })
        this.setState({
            filterMovies: Filtered
        })
        console.log(this.state.filterMovies)
    }
    

    render(){
        return(
            <Main>
                <SearcherBox>
                    <Searcher onChange={this.handleChange} />
                </SearcherBox>
                <Box>
                    <Painel>
                        {this.state.filterMovies.map((item,index)=>(
                            <MovieBox key={index}>
                                <div>
                                    <Poster src={item.image} alt="Pôster" />
                                </div>
                                <Title>{item.nome}</Title>
                            
                            </MovieBox>
                        ))}
                    </Painel>
                </Box>
            </Main>
        )
    }
}