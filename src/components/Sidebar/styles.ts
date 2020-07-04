import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

export const Content = styled.div`
  height: calc(100vh - 40px);
  width: 400px;
  background: #FFFFFF;
  border-radius: 15px;
  margin-right: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 13px 3px rgba(214,214,214,1);
  -moz-box-shadow: 0px 0px 13px 3px rgba(214,214,214,1);
  box-shadow: 0px 0px 13px 3px rgba(214,214,214,1);

  svg {
    transform: rotate(180deg);
    margin: 20px;
    cursor: pointer;
  }

  img {
    width: 100px;
    border-radius: 4px;
  }
`;

export const Header = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 100px;
    border-radius: 4px;
  }

  p {
    line-height: 2rem;
    margin-top: 15px;
    font-size: 20px;
  }

  small {
    color: #6b6b6b;
  }

  span small {
    color: #006D99;
  }

  span {
    margin-top: 10px;
    border-radius: 6px;
    text-transform: uppercase;
    padding: 4px 10px;
    background: #006d9926;
    display: block;
    text-align: center;
  }
`;

export const Inventory = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 30px;
  margin-top: 10px;

  p {
    width: 100%;
    padding: 10px 30px;
    color: #ccc;
  }

  span {
    margin: 15px;
    height: 50px;
    width: 50px;
    background: #E3E3E3;
    border-radius: 4px;
  }
`;

export const Separator = withStyles({
  root: {
    margin: '40px 30px 0 30px'
  },
})(Divider);
