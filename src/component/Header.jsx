import React, { Component } from 'react';
import styled from "styled-components";
import Clock from './Clock.jsx';

const Nav = styled.div`
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    position: relative;
    background-color: rgba(238, 238, 238, 0.2);
`;
const NavItem = styled.a`
    color: #fff;
    display: inline-block;
    width: 100px;
    opacity: 0.5;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    &:hover {
        opacity: .75;
        border-bottom: 1px solid #fff;
    }
    &.active {
        opacity: 1;
        border-bottom: 1px solid #fff;
    }
`;

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeId: 1
        }
        this.toggleItem = this.toggleItem.bind(this);
    }

    render () {
        return (
            <Nav>
                <NavItem className={this.state.activeId === 1 ? 'active' : ''} onClick={(e) => this.toggleItem(1, e)}>Home</NavItem>
                <NavItem className={this.state.activeId === 2 ? 'active' : ''} onClick={(e) => this.toggleItem(2, e)}>Resume</NavItem>
                <Clock />
            </Nav>
        )
    }

    toggleItem (id) {
        this.setState({
            activeId: id
        })
        this.props.toggleItem(id);
    }
}
export default Header;