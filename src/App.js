import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { getMockUsers } from './store/slices/mockSlice';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.mock.users);

  useEffect(() => {
    dispatch(getMockUsers());
  }, [])

  return (
    <Grid>
      Your code here
    </Grid>
  )
}

export default App;