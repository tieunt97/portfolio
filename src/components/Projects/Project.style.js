import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px 0px;

    h1 {
        position: relative;
        left: 15px;
        top: 0px;
        width: max-content;
        margin-bottom: 25px;

        span {
            position: absolute;
            font-size: 3em;
            color: #FFEB3B
            bottom: -21px;
            left: 3px;
            z-index: -99;
        }
    }
`;