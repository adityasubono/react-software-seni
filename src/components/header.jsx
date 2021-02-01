import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userActions } from './../redux/actions'

class Header extends Component {
    state = {  }
    render() {
        return (
            <div className="mb-5">
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark default-color pt-5" style={{backgroundColor:'khaki'}}>
                    <h1 style={{color: "black"}}>
                        Welcome to <strong>SS Github Repositories Search</strong>
                    </h1>
                    {
                        this.props.usernameR!==''?
                        console.log(this.props.usernameR) //===================shows that redux(usernameR) passed to header
                        :
                        null
                    }
                </nav>
            </header>
            </div>
         );
    }
}

const MapstateToprops = (state) =>{
    return{
      usernameR: state.usernameR
    }
  }

export default connect(MapstateToprops, {userActions})(Header);
