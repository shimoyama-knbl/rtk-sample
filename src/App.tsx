import React, { ChangeEvent } from 'react';
import '~/assets/App.scss';
import { useSelector } from 'react-redux';
import { RootState } from '~/app/store';
import { useAppDispatch } from '~/app/hooks';
import styled from "styled-components"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Button, TextField } from '@mui/material';
import * as Constants from '~/app/constants'; 
import { Loading } from '~/features/loading/Loading';
import { Home } from '~/pages/Home';
import { Sample } from "~/pages/Sample";
import { Gnav } from '~/components/Gnav';

export const App = () => {
  const state = useSelector((state: RootState) => state);

  React.useEffect(() => {
    console.log('states', state);
  }, [state]);
  
  return (
    <Wrapper>
      <Loading></Loading>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Gnav />
        <Routes>
          <Route path={Constants.PAGE_PATHS.home} element={<Home />} />
          <Route path={Constants.PAGE_PATHS.sample} element={<Sample />} />
        </Routes>
        <Loading />
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div `
`
