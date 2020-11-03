import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import TinderCard from "react-tinder-card";
import axios from '../api';
import loaderImg from '../img/loader.svg';

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

const Loader = styled.img`
    position: absolute;
    left: 45vw;
    top: 12vw;
    
    @media (max-width: 500px){
        left: 24vw;
        top: 40vw;
    }
`;

function PersonCards() {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        const getPersonsReq = async () => {
            const res = await axios.get('/persons');
            setPersons(res.data);
        }

        getPersonsReq();
    }, []);

    return (
        <>
            <Loader src={loaderImg} alt="Loading"/>
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
        </>
    )
}

export default PersonCards;