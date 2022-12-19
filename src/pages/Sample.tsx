import React, { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "~/app/store";
import { useAppDispatch } from "~/app/hooks";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import * as Constants from "~/app/constants";
import * as YoutubeSlice from "~/features/youtube/youtubeSlice";
import { YoutubeList } from "~/features/youtube/components/YoutubeList";

export const Sample = () => {
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state);

  return (
    <Wrapper>
      <p>sample</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
`;
