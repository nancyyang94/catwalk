import styled from 'styled-components';

const NavButton = styled.button`
width: 24px;
height: ${(props) => (props.active ? '24px' : '0px')};
background-color:${(props) => (props.active ? 'transparent' : 'black')};
margin: 5px;
border: none;
border-bottom: ${(props) => (props.current === props.index ? '3px solid #000' : '1px solid #000')};
position: relative;
bottom: 0px;
cursor: pointer;
transition-duration: 0.3s;
transition-timing-function: ease;
overflow: hidden;

:focus {
  outline: none;
}
`;

export default NavButton;
