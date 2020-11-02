import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BlockIcon from '@material-ui/icons/Block';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import {IconButton} from "@material-ui/core";
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    bottom: 64px;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    .MuiIconButton-root{
        background: white;
        box-shadow: 0 20px 30px 0 rgba(1, 1, 1, 0.3);
    }
    
    .skip-button{
        color: #ec5e6f;
        min-width: 90px;
        min-height: 90px;
    }
    .super-button{
        color: #f5b748;
        min-width: 90px;
        min-height: 90px;
    }
    .like-button{
        color: #76e2b3;
        min-width: 90px;
        min-height: 90px;
    }
`;

function Footer(){
    return (
        <Wrapper>
            <IconButton className="skip-button">
                <BlockIcon fontSize="large"/>
            </IconButton>
            <IconButton className="super-button">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
            <IconButton className="like-button">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
        </Wrapper>
    )
}

export default Footer;