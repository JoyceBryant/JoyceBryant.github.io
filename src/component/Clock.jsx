import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Item = styled.div`
    position: absolute;
    top: 5px;
    right: 15px;
    color: #fff;
    width: 100px;
`;

const Text = styled.div`
    height: 25px;
    line-height: 25px;
    text-align: center;
`;

const Clock = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timeId = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timeId);
        };
    });
    return(
        <Item>
            <Text>
                <span>{date.toLocaleDateString()}</span>
            </Text>
            <Text>
                <span>{date.toLocaleTimeString()}</span>
            </Text>
        </Item>
    );
};

// class Clock extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }

//     componentDidMount() {
//         this.timeId = setInterval(() => {
//             this.setState({
//                 date: new Date()
//             });
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.timeId);
//     }

//     render() {
//         return (
//             <Item>
//                 <Text>{this.state.date.toLocaleDateString()}</Text>
//                 <Text>{this.state.date.toLocaleTimeString()}</Text>
//             </Item>
//         );
//     }
// }

export default Clock;