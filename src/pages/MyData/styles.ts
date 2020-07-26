import styled from 'styled-components';

export const Content = styled.div`
  padding: 20px;
  border-radius: 15px;
  margin-top: 80px;

  > p {
    font-weight: 500;
  }

  > p:first-child {
    color: #3970ad;
  }

  > div {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }
`;

export const Box = styled.div`
  background: #ffffff;
  border: 1.3px solid #eaeaea;
  height: 200px;
  width: 200px;
  border-radius: 15px;
  margin: 0 35px 35px 0;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(214, 214, 214, 1);
  -moz-box-shadow: 0px 0px 10px 0px rgba(214, 214, 214, 1);
  box-shadow: 0px 0px 10px 0px rgba(214, 214, 214, 1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  span {
    padding: 25px 10px 10px 10px;
    height: 90%;
    text-align: center;
    display: flex;
    align-items: center;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 8px;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #bdbdbd;
    }
  }

  small {
    padding: 10px;
    color: #7f817e;
  }
`;
