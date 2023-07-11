import React, { Component } from "react";
import axios from "axios";

// import { withRouter } from "react-router-dom";
import withNavigate from "../HOC/withNavigate";
class DetailUser extends React.Component{
    state = {
        user:{}
    }
    async componentDidMount() {
        if (this.props.params)
        {
            let id = this.props.params.id;         
            let res = await axios.get(`https://reqres.in/api/users/${id}`); 
            this.setState({
                user: res&&res.data&&res.data.data?res.data.data:{}
            })
            console.log('>>check res: ',res)
        }
    }
    handleBackButton = () => {
        this.props.navigate('/user')
    }
    render() {
        let { user } = this.state;
        console.log('>>check props, ', this.props.params.id);
        let isEmptyObj = Object.keys(user).length === 0;

        return (
            <>
                <div>Hello user with id: { this.props.params.id }</div>
                { isEmptyObj === false &&
                <>
                    <div>User's name: { user.first_name }-{ user.lasr_name }</div> 
                    <div>User's email: { user.email}</div>    
                    <div>
                        <img src={ user.avatar} />
                    </div>
                    <div>
                        <button type="button"
                        onClick={()=>this.handleBackButton()}>
                            Back
                        </button>
                    </div>
                </>    
                }
            </>
        )
    }
}
// export default withRouter(DetailUser);
export default withNavigate(DetailUser);



// import { Link, useParams } from "react-router-dom";
// import ListUser from "./ListUser";
// import axios from "axios";
// const DetailUser = () => {
//     // let { id } = this.props.params;
//     let { navigate } = this.props;
//     const p = useParams();
//     const { id } = useParams();
//     console.log('>>>param: ', p);
//     // console.log('>>>props: ', navigate)
//     // async componentDidMount(){

//     // }
//     return (
//         <div>hello world from detail user id: {id}</div>
//     );
// };
// export default DetailUser;