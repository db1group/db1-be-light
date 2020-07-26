import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const mobile = window.matchMedia('(max-width: 600px)').matches;

export const Content = styled.div`
  padding: 20px;
  margin-top: 60px;
`;

export const Box = styled.div`
  background: #ffffff;
  border: 1.3px solid #eaeaea;
  height: 200px;
  width: 200px;
  border-radius: 15px;
  margin: 0 35px 35px 0;
  -webkit-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

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

export const AccordionDetails = withStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
})(ExpansionPanelDetails);

// export const Lane = withStyles({
//   root: {
//     background: '#f1f1f1',
//     borderRadius: '10px',
//     padding: 10,
//     marginTop: 20,
//     display: 'flex',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     alignItems: 'center',
//     alignContent: 'center',
//   },
// })(Grid);
