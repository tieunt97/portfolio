import styled from 'styled-components';

const Container = styled.div`
    > h1 {
        color: palevioletred;
    }
    padding: 30px 60px 40px;

    p.technology {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }

    p.technology > i {
        margin-right: 10px;
    }
`;

export { Container };