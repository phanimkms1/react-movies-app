import React, { Component } from 'react';
import './Header.css';
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo.svg";
import Modal from "react-modal";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value:0
        };
    }
    openModalHandler = () => {
        this.setState({ modalIsOpen: true })
    }
    closeModalHandler = () => {
        this.setState({ modalIsOpen: false })
    }
    tabChangeHandler =(event,value) =>{
        this.setState({value})
    }
    render() {
        return (
            <div className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <Button className="login-button" variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeModalHandler}>
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login"></Tab>
                        <Tab label="Register"></Tab>

                    </Tabs>
                </Modal>
            </div>

        )
    }
}

export default Header;