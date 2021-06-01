import React from 'react';
import MainArea from './MainArea';
import './index.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink , Button} from 'reactstrap';
import axios from 'axios';
import { SpinnerCircular } from 'spinners-react';
export default class TopNav extends React.Component {
  
  constructor(props) {
  
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      user:[]
    };
  }

  override = {
  display: "block",
  margin: "auto",
  borderColor: "red"}

  toggle() {
    if(this.state.isOpen){
      setTimeout(() => {
        this.setState({isOpen:false})
      }, 1000);
    }
    else{
      this.setState({
        isOpen: !this.state.isOpen
      });
  }
  }

   getUser=()=>{
    this.toggle();
    axios.get(`https://reqres.in/api/users?page=1`)
      .then(res => {
        this.toggle();

        const persons = res.data.data;
         console.log(res);
          this.setState({ user:res.data.data });
          return res.data.data;
      }
      )
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable color="info">
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">Advertyzement</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem class="user">
                <Button  onClick={this.getUser} >Get users</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {
          // (this.state.isOpen)?<ClipLoader className={this.override}    size={150} />:null
        }
        <SpinnerCircular enabled={this.state.isOpen}  style={{color :"#5bc0de", backgroundColor: "white", marginLeft:"50%"}}/>
        {
          (!this.state.isOpen)? <MainArea people={this.state.user} />:null
        }
      </div>
    );
  }
}
