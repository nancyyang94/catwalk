import styled from 'styled-components';

const NavButton = styled.button`
width: 24px;
height: ${(props) => (props.active ? '24px' : '1px')};
margin: 5px;
border: none;
border-bottom: ${(props) => (props.current === props.index ? '3px solid #000' : '1px solid #000')};
position: relative;
bottom: 0px;
overflow: scroll;
cursor: pointer;
transition-duration: 0.3s;
transition-timing-function: ease;

:focus {
  outline: none;
}
`;

export default NavButton;
