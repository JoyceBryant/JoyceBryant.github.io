import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.article`
    color: #fff;
    background-color: rgba(69, 68, 68, 0.3);
    height: 100%;
`;
const P = styled.p`
`;
const Title = styled.p`
`;

class Resume extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <Container>
                <p>
                </p>
                <P></P>
            </Container>
        )
    }
}

export default Resume;