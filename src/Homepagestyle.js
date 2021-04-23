import Styled from 'styled-components'

const Homepagestyles = Styled.div`
.HeaderContainer {
    background-color: red;
    color: black;
    padding: 0;
    margin: 0;
    height: 12vh;
    display: flex;
    justify-content: space-evenly;
}
.Logo {
    width: 50%;
    h1 {
        margin: 0;
        padding-top: 4%;
        padding-left: 4%;
    }
}
.Navigation {
    display: flex;
    justify-content: center;
    width: 50%;
    margin-top: 2%;
    a {
        text-decoration: none;
        color: white;
        padding-top: 3%;
        padding-right: 3%;
        padding-left: 3%;
        font-weight: 600;
        &:hover {
            border-radius: 100px;
            border-bottom: 100px solid white;
            border-top: 1px solid white;
            background-color: white;
            color: black;
            font-weight: 700;
        }
    }
}
.TextContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
}
.TextTitle {
    font-size: 2rem;
    padding-top: 6%;
    color: black;
}
.TextParagraph {
    font-weight: 600;
    text-align: center;
    color: black
    span {
        color: green;
        &:hover {
            font-weight: 700;
            cursor: pointer;
        }
.buttonDiv{
    display:flex;
    justify-content: center;
}
.buttonDiv p{
    display: flex;
    justify-content: center;
}
p{
    color: #66FF33;
}
    }
}
`;




export default Homepagestyles;