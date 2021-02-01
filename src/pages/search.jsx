import React, { Component} from 'react'
import Axios from 'axios';
import { connect } from 'react-redux'
import { userActions } from '../redux/actions'

class Search extends Component {
    state = {
        datarepo: [],
        dataowner: []
     }

     pencarian=()=>{
        let cari = this.refs.usernamecari.value
        console.log(cari)

         Axios.get(`https://api.github.com/users/${cari}/repos`)
         .then((res) => {
             console.log(res.data)
                localStorage.setItem('ignatius',res.data[0].owner.login) //=================>saves username to local storage
                this.props.userActions(res.data[0].owner.login)
             this.setState({ datarepo:res.data, dataowner:res.data.owner })
         }).catch((err) => {
             console.log(err)
         })
     }

     renderrepo=()=>{
        return this.state.datarepo.map((val,index) => {
            return(
                <tr key={index}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.full_name}</td>
                    <td>{val.html_url}</td>
                </tr>
            )
        })
     }

    render() {
        console.log(this.props.usernameR) //=================>show that redux has worked
        return (
            <div className="mb-5">
                <div className="active-cyan-4 mb-5">
                    <input onChange={this.pencarian.bind(this)}  style={{height:'100px', width:'500px', textAlign:'center'}} ref="usernamecari" className="form-control" type="text" placeholder="Search Github Username" aria-label="Search" />
                </div>
                {
                    this.state.datarepo.length?
                    <div>
                        <h3><strong>Repositories</strong></h3>
                        <table style={{marginLeft:'35vh'}} className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderrepo()}
                            </tbody>
                        </table>
                    </div>
                    :
                    null
                }
            </div>
         );
    }
}

const MapstateToprops = (state) =>{
    return{
      usernameR: state.usernameR
    }
  }

export default connect(MapstateToprops, {userActions})(Search);
