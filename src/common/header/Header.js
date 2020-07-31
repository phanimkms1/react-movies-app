import React, { Component } from 'react';
import './Header.css';
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo.svg";
import Modal from "react-modal";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%,-50%)'
    }
}
const TabContainer = function(props){
    return(
        <Typography component="div" style={{padding: 0,textAlign:'center'}}>
            {props.children}
        </Typography>

    );
}

TabContainer.propTypes ={
    children: PropTypes.node.isRequired
}

class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            userNameRequired:"dispNone",
            username:"",
            password:"",
            passwordRequired:"dispNone"
        };
    }
    openModalHandler = () => {
        this.setState({ modalIsOpen: true })
    }
    closeModalHandler = () => {
        this.setState({ modalIsOpen: false })
    }
    tabChangeHandler = (event, value) => {
        this.setState({ value })
    }
    loginClickHandler = () => {
        this.state.username === ""? this.setState({userNameRequired:"dispBlock"}) : this.setState({userNameRequired:"dispNone"});
        this.state.password === ""? this.setState({passwordRequired:"dispBlock"}) : this.setState({passwordRequired:"dispNone"});
    }
    usernameChangeHandler =(e) =>{
        this.setState({ username:e.target.value})
    }
    passwordChangeHandler = (e) =>{
        this.setState({ password:e.target.value })
    }
    render() {
        return (
            <div className="app-header">
                <img src={logo} className="app-logo" alt="logo" />

                <Button
                    className="login-button"
                    variant="contained"
                    color="default"
                    onClick={this.openModalHandler}>Login</Button>

                <Modal
                    ariaHideApp={false}
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Login"
                    onRequestClose={this.closeModalHandler}
                    style={customStyles}>

                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login"></Tab>
                        <Tab label="Register"></Tab>

                    </Tabs>
                    {this.state.value === 0 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="username" >Username</InputLabel>
                            <Input id="username" type="text" username={this.state.username} onChange={this.usernameChangeHandler}/>
                            <FormHelperText className={this.state.userNameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="password" >Password</InputLabel>
                            <Input id="password" type="password" password={this.state.password} onChange={this.passwordChangeHandler}/>
                            <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>

                    </TabContainer>}

                </Modal>
            </div>

        )
    }
}

export default Header;