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
    box-shadow: 0 20px 30px 0 rgba(1, 1, 1, 0.3);
    width: 80vw;
    height: 600px;
    border-radius: 20px;
    
    @media (max-width: 500px){
        width: 94vw;
        height: 90vw;
    }
`;

const CardTitle = styled.span`
    position: absolute;
    bottom: 0;
    color: white;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    margin: 16px;
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