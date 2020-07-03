import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  img {
    border-radius: 50%;
    width: 80px;
    margin-right: 10px;
  }

  p {
    line-height: 1.5rem;
  }

  span {
    color: #869cad;
    /* font-size: 14px; */
    margin-top: 10px;
    border-radius: 6px;
    text-transform: uppercase;
    padding: 4px 10px;
    background: #F2F5F8;
    display: block;
    text-align: center;
  }
`;
