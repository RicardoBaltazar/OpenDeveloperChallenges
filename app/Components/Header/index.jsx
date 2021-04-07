import styled from 'styled-components';

const HeaderMenu = styled.header`
    border: 1px solid green;
    /* border: none; */
    background-color: var(--secondary-color);
    height: 32vh;
    font-size: 2rem;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .div2{
        background-color: var(--tertiary-color);
        height: 10vh;
    }
`

export default function Header(){
    return (
        <HeaderMenu>
            <div>
                <h2>menu 1</h2>
            </div>
            <div className='div2'>
                <h2>menu 2</h2>
            </div>
        </HeaderMenu>
    )
}