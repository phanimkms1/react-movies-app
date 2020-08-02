import React,{Component} from 'react';
import './Details.css';
import Header from '../../common/header/Header';
import moviesData from '../../common/movieData';
import Typography from '@material-ui/core/Typography';

class Details extends Component {
    constructor(){
        super();
            this.state={
                movie:{}
            }
        
    }

    componentWillMount(){
        let currentState=this.state;
        currentState.movie=moviesData.filter((mov)=>{
            return mov.id === this.props.movieId
        })[0];
        this.setState({currentState});
        
    }
    render(){

        let movie=this.state.movie;

        return(<div className="details">
            <Header/>
            <div className="flex-containerDetails">
                <div className="leftDetails">
                    <img src={movie.poster_url} alt={movie.title}/>
                </div>
                <div className="middleDetails">
                    <div>
                        <Typography variant="h3" >{movie.title}</Typography>
                    </div>
                    <div>
                        <Typography><span className="bold">{movie.genres.join(",")}</span></Typography>
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