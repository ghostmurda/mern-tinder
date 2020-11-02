import React, {useState} from "react";
import styled from 'styled-components';
import TinderCard from "react-tinder-card";

const initialState = [
    {
        name: 'Daniel Simonov',
        img: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2019/07/pandasecurity-How-do-hackers-pick-their-targets.jpg'
    },
    {
        name: 'Guts',
        img: 'https://pbs.twimg.com/profile_images/932326601592885250/rQ_dpiZ6.jpg'
    },
    {
        name: 'Guts2',
        img: 'https://pbs.twimg.com/profile_images/932326601592885250/rQ_dpiZ6.jpg'
    }
];

const PersonsContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: 16px;
    left: 10vw;
    
    @media (max-width: 500px){
        left: 3vw;
    }
    
    .swipe{
        position: absolute;
    }
`;

const Card = styled.div`
    position: absolute;
    background: url(${props => props.url});
    background-position: center;
    background-size: cover;
    width: 80vw;
    height: 600px;
    border-radius: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    
    @media (max-width: 500px){
        width: 94vw;
        height: 90vw;
    }
`;

const CardTitle = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    align-items: flex-end;
    background: linear-gradient(360deg, rgba(73, 74, 73, 0.9), rgba(73, 74, 73, 0));
    justify-content: center;
    color: white;
    font-size: 25px;
    line-height: 100px;
    font-family: 'Roboto', sans-serif;
`;

function PersonCards(props) {
    const [persons, setPersons] = useState(initialState);

    return (
        <PersonsContainer>
            {persons.map((item) => (
                <TinderCard
                    classname="swipe"
                    key={item.name}
                    preventSwipe={["up", "down"]}
                >
                    <Card url={item.img}>
                        <CardTitle>{item.name}</CardTitle>
                    </Card>
                </TinderCard>
            ))}
        </PersonsContainer>
    )
}

export default PersonCards;