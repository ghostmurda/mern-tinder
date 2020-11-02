import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import {IconButton} from "@material-ui/core";
import styled from 'styled-components';
import reactLogo from '../img/react-logo.svg';
import ChatIcon from '@material-ui/icons/Chat';

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

function Header() {
    return (
        <Wrapper>
            <IconButton>
                <PersonIcon fontSize="large"/>
            </IconButton>
            <img src={reactLogo} alt="Logo" width="60"/>
            <IconButton>
                <ChatIcon fontSize="large"/>
            </IconButton>
        </Wrapper>
    )
}

export default Header;