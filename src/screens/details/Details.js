import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Details.css';
import Header from '../../common/header/Header';
import Home from '../../screens/home/Home';
import moviesData from '../../common/movieData';
import Typography from '@material-ui/core/Typography';
import YouTube from 'react-youtube';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            movie: {}
        }

    }

    componentWillMount() {
        let currentState = this.state;
        currentState.movie = moviesData.filter((mov) => {
            return mov.id === this.props.movieId
        })[0];
        this.setState({ currentState });

    }

    backToHomeHandler =() =>{
        ReactDOM.render(<Home/>,document.getElementById('root'));
    }
    render() {

        let movie = this.state.movie;
        const opts ={
            height:'500',
            width:'700',
            playerVars:{
                autoplay:1
            }
        }

        return (<div className="details">
            <Header />
            <Typography className="back" onClick={this.backToHomeHandler}>
                &#60; Back To Home</Typography>
            <div className="flex-containerDetails">
                <div className="leftDetails">
                    <img src={movie.poster_url} alt={movie.title} />
                </div>
                <div className="middleDetails">
                    <div>
                        <Typography variant="h3" >{movie.title}</Typography>
                    </div>
                    <br />
                    <div>
                        <Typography><span className="bold">Genres: </span>{movie.genres.join(", ")}</Typography>
                    </div>
                    <div>
                        <Typography><span className="bold">Duration: </span> {movie.duration} </Typography>
                    </div>
                    <div>
                        <Typography><span className="bold">Release Date: </span> {new Date(movie.release_date).toDateString()} </Typography>
                    </div>
                    <div>
                        <Typography><span className="bold"> Rating: </span> {movie.critics_rating}  </Typography>
                    </div>
                    <div className="marginTop16">
                        <Typography><span className="bold">Plot: </span> <a href={movie.wiki_url}>(Wiki Link)</a> {movie.storyline} </Typography>
                    </div>
                    <div className="trailerContainer">
                        <Typography><span className="bold">Trailer: </span></Typography>
                        <YouTube
                                videoId={movie.trailer_url.split("?v=")[1]}
                                opts={opts}
                                onReady={this._onReady}
                            />
                    </div>

                </div>
                <div className="rightDetails">

                </div>
            </div>
        </div>
        );
    }
}

export default Details;