import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

export const Content = styled.div`
  height: calc(100vh - 40px);
  width: 400px;
  background: #ffffff;
  border-radius: 15px;
  margin-right: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 13px 3px rgba(214, 214, 214, 1);
  -moz-box-shadow: 0px 0px 13px 3px rgba(214, 214, 214, 1);
  box-shadow: 0px 0px 13px 3px rgba(214, 214, 214, 1);

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
  padding: 0 20px;

  img {
    width: 100px;
    border-radius: 4px;
  }

  p {
    line-height: 2rem;
    margin: 15px 0;
    font-size: 20px;
  }

  small {
    color: #6b6b6b;
  }

  span small {
    color: #006d99;
  }

  span {
    margin-top: 10px;
    border-radius: 6px;
    text-transform: uppercase;
    padding: 4px 20px;
    background: #006d9926;
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
    background: #e3e3e3;
    border-radius: 4px;
  }
`;

export const Separator = withStyles({
  root: {
    margin: '40px 30px 0 30px',
  },
})(Divider);

export const AvatarImage = withStyles({
  root: {
    width: 80,
    height: 80,
  },
})(Avatar);
