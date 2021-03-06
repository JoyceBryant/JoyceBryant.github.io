import React, { Component } from 'react';
import Header from "./component/Header.jsx";
import styled from "styled-components";
import animation from "./animation/animation.jsx"

const Container = styled.div`
    background-color: rgba(238, 238, 238, 0.2);
    height: 100%;
    width: 80%;
    margin:0 auto;
`;
const Item = styled.div`
    display: none;
    &.active {
        display: block;
    }
`;

const Text = styled.div`
    position: absolute;
    font-size: 50px;
    color: #fff;
    top: 27%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: 3s ${animation.fadeIn} ease-out;
`;
const Resume = styled.embed`

`;

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeId: 1
        }
        this.toggleItem = this.toggleItem.bind(this);
    }

    toggleItem (id) {
        this.setState({
            activeId: id
        })
    }

    render () {
        return (
            <Container>
                <Header toggleItem = {id => this.toggleItem(id)}/>
                <Item className={this.state.activeId === 1 ? 'active' : ''}>
                    <Text>Welcome</Text>
                </Item>
                <Item className={this.state.activeId === 2 ? 'active' : ''}>
                    <Text>Resume</Text>
                </Item>
            </Container>
        )
    } 
}
export default App;