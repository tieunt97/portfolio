import styled from 'styled-components';
import media from '../../theme/media';

const Image = styled.img`
    width: 100%;
`;

const HeroImage = styled.div`
    position: relative;
    color: palevioletred;
    font-size: 2em;
    font-weight: 700;
    letter-spacing: 1.5px;

    img {
        margin: auto;
    }

    div {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        h1 {
            margin: 0px;
            font-size: 1.5em;
            font-weight: bold;
            ${media.phone`
                font-size: 1em;
            `}
        }

        p {
            margin: 0;
            ${media.phone`
                font-size: 0.68em;
            `}
        }
    }
`;

const RevealP = styled.p`
    position: relative;
    font-size: 1.5em;
    text-align: justify;
    margin-top: 20px;
    color: palevioletred;

    &:after{
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #6699ff;

        transform-origin: left;
        transform: ${({ hide }) => hide ? 'rotateY(0deg)' : 'rotateY(90deg)'};

        transition: transform 1s;
    }
`;

export { HeroImage, Image, RevealP };