import React from "react";
import './Nav.scss';
import {
  Link, NavLink
} from "react-router-dom";
class Nav extends React.Component{
    render() {
        return (
            <div className="topnav">
                <NavLink to="/"  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "" } >Home</NavLink>    
                <NavLink to="/todo"  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "" } >Todos</NavLink> 
                <NavLink to="/about"  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "" } >About</NavLink> 
                <NavLink to="/user"  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "" } >Users</NavLink> 
                {/* <Link to="/todo">Todo</Link>
                <Link to="/about">About</Link> */}

                {/* <a className="active" href="/">Home</a>
                <a href="/todo">Todos</a>
                <a href="/about">About</a> */}
                {/* <a href="#contact">Contact</a> */}

            </div>           
        )
    }
}

export default Nav;