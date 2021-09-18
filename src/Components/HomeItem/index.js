import React from 'react';

import styled from 'styled-components';

const Container = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
`

const ItemContaienr = styled.div`
    width:90%;
    margin 20px auto;
    height:100px;
    border-radius:4px;
    padding:3px;
    box-shadow:0 5px 10px 0 rgba(0,0,0,.25);
    cursor:pointer;
    transition:all 0.5s;

    @media only screen and (min-width: 600px) {
        width:500px;
    }

    &:hover{
        box-shadow:0 5px 20px 0 rgba(0,0,0,.25);
    }
    
`

const Title = styled.h3`
    margin-left:20px;
    margin-top:20px;
    color:#3A3535;
`



const HomeItem = ()=>{

    return(
        <Container>
            <ItemContaienr>
                 <Title>Math Blog 1</Title>
            </ItemContaienr>
            <ItemContaienr>
                <Title>Math Blog 2 </Title>
            </ItemContaienr>
        </Container>
    )
}

export default HomeItem;