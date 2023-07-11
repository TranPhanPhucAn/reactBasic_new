import React from "react";
import Color from "../HOC/Color";
import logo from '../../assets/images/download (2).jpg';
import { connect } from "react-redux";

class Home extends React.Component{
    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
    }
    handleCreateUser = () => {
        this.props.addUserRedux();
    }
    
    render() {
        console.log('>>>props: ', this.props);
        let listUsers = this.props.dataRedux;

        return (
            <>
                <div>
                Hello world from Homepage
                </div>
                <div>
                    <img src={logo } />
                </div>
                <div>
                    { listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    { index + 1 } - { item.name }
                                    <span onClick={ () => this.handleDeleteUser(item) }>X</span>
                                    
                            </div>
                        )
                        }) }
                    <button onClick={ () => this.handleCreateUser() }>Add new</button>
                </div>
            </>
            
        )
    }

}
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
            
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));