import styled from 'styled-components';

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    min-height: 430px;
    transition: all .3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb .5s;
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
    @keyframes animateThumb {
        from {
            opacity: 0;
        } to {
            opacity: 1;
        }
    }
`;

export const Title = styled.p`
    color: black;
    font-weight: 600;
    margin: 0;
    background: #c5c5c5;
    margin-top: -45px;
    height: 70px;
    border-radius: 0 0 20px 20px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 6px;
`;