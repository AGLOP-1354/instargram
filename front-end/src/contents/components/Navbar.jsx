import React from "react";
import { HomeOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <NavDiv>
            <Link to="/"><HomeIcon /> </Link>
            <Link to="/search"><SearchIcon /></Link>
            <Link to="/profile"><UserIcon /></Link>
        </NavDiv>
    )
}

const NavDiv = styled.div`
        width: 100vw;
        height: 50px;
        margin: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color:white;
        background-color: black;
        position: -webkit-sticky;
        position: fixed;
        bottom: 0;
        border: 1px solid black;
`;
const HomeIcon = styled(HomeOutlined)`
    font-size: 25px;
    color: white;
    `;
const SearchIcon = styled(SearchOutlined)`
    font-size: 25px;
    color: white;
    `;
const UserIcon = styled(UserOutlined)`
    font-size: 22px;
    border: 3px solid white;
    border-radius: 50px;
    padding: 1.5px;
    color: white;
    `;
export default Navbar;
