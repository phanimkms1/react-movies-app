import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
import BookShow from '../../screens/bookshow/BookShow';

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
const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
            {props.children}
        </Typography>

    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            userNameRequired: "dispNone",
            username: "",
            password: "",
            passwordRequired: "dispNone",
            firstname: "",
            lastname: "",
            email: "",
            passwordReg: "",
            contactno: "",
            firstNameRequired: "dispNone",
            lastNameRequired: "dispNone",
            emailRequired: "dispNone",
            passwordRegRequired: "dispNone",
            contactnoRequired: "dispNone"
        };
    }
    openModalHandler = () => {
        this.setState({
            modalIsOpen: true,
            value: 0,
            userNameRequired: "dispNone",
            username: "",
            password: "",
            passwordRequired: "dispNone",
            firstname: "",
            firstNameRequired: "dispNone",
            lastname: "",
            lastNameRequired: "dispNone",
            email: "",
            emailRequired: "dispNone",
            passwordReg: "",
            passwordRegRequired: "dispNone",
            contactno: "",
            contactnoRequired: "dispNone"

        })
    }
    closeModalHandler = () => {
        this.setState({ modalIsOpen: false })
    }
    tabChangeHandler = (event, value) => {
        this.setState({ value })
    }
    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ userNameRequired: "dispBlock" }) : this.setState({ userNameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
    }
    usernameChangeHandler = (e) => {
        this.setState({ username: e.target.value })
    }
    passwordChangeHandler = (e) => {
        this.setState({ password: e.target.value })
    }
    firstnameChangeHandler = (e) => {
        this.setState({ firstname: e.target.value })
    }
    lastnameChangeHandler = (e) => {
        this.setState({ lastname: e.target.value })
    }
    emailChangeHandler = (e) => {
        this.setState({ email: e.target.value })
    }
    passwordRegChangeHandler = (e) => {
        this.setState({ passwordReg: e.target.value })
    }
    contactnoChangeHandler = (e) => {
        this.setState({ contactno: e.target.value })
    }
    bookShowHandler =() =>{
        ReactDOM.render(<BookShow/>,document.getElementById('root'));
    }
    regClickHandler = () => {
        this.state.firstname === "" ? this.setState({ firstNameRequired: "dispBlock" }) : this.setState({ firstNameRequired: "dispNone" });
        this.state.lastname === "" ? this.setState({ lastNameRequired: "dispBlock" }) : this.setState({ lastNameRequired: "dispNone" });
        this.state.email === "" ? this.setState({ emailRequired: "dispBlock" }) : this.setState({ emailRequired: "dispNone" });
        this.state.passwordReg === "" ? this.setState({ passwordRegRequired: "dispBlock" }) : this.setState({ passwordRegRequired: "dispNone" });
        this.state.contactno === "" ? this.setState({ contactnoRequired: "dispBlock" }) : this.setState({ contactnoRequired: "dispNone" });
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
                <div className="bookshow-button">
                    {this.props.showBookShowButton === "true"
                        ? <Button variant="contained" color="primary" onClick={this.bookShowHandler}>BOOK SHOW</Button>
                        : ""
                    }

                </div>

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
                                <Input id="username" type="text" username={this.state.username} onChange={this.usernameChangeHandler} />
                                <FormHelperText className={this.state.userNameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="password" >Password</InputLabel>
                                <Input id="password" type="password" password={this.state.password} onChange={this.passwordChangeHandler} />
                                <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>

                        </TabContainer>}
                    {this.state.value === 1 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="firstname" >Firstname</InputLabel>
                                <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.firstnameChangeHandler} />
                                <FormHelperText className={this.state.firstNameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="lastname" >Lastname</InputLabel>
                                <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.lastnameChangeHandler} />
                                <FormHelperText className={this.state.lastNameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="email" >Email</InputLabel>
                                <Input id="email" type="email" email={this.state.email} onChange={this.emailChangeHandler} />
                                <FormHelperText className={this.state.emailRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="passwordReg" >Password</InputLabel>
                                <Input id="passwordReg" type="password" passwordReg={this.state.passwordReg} onChange={this.passwordRegChangeHandler} />
                                <FormHelperText className={this.state.passwordRegRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="contactno" >Contact No</InputLabel>
                                <Input id="contactno" type="number" contactno={this.state.contactno} onChange={this.contactnoChangeHandler} />
                                <FormHelperText className={this.state.contactnoRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />

                            <Button variant="contained" color="primary" onClick={this.regClickHandler}>REGISTER</Button>

                        </TabContainer>}


                </Modal>
            </div>

        )
    }
}

export default Header;