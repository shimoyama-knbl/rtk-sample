import React, { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "~/app/store";
import { useAppDispatch } from "~/app/hooks";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import * as Constants from "~/app/constants";
import * as YoutubeSlice from "~/features/youtube/youtubeSlice";
import { YoutubeList } from "~/features/youtube/components/YoutubeList";

export const Home = () => {
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state);

  const [localState, localSetter] = React.useState<{ query: string }>({
    query: "",
  });

  React.useEffect(() => {
    console.log("states", state);
  }, [state]);

  const handleClick = () => {
    dispatch(YoutubeSlice.getSearchAsync(localState.query));
  };

  const handleCahnge = (e: ChangeEvent<HTMLInputElement>) => {
    localSetter({ ...localState, query: e.currentTarget.value });
  };

  return (
    <Wrapper>
      <div className="nav">
        <TextField
          className="input"
          onChange={handleCahnge}
          variant="outlined"
          size="small"
        ></TextField>
        <Button
          className="btn"
          onClick={handleClick}
          disabled={!Boolean(localState.query)}
          variant="outlined"
        >
          SEARCH
        </Button>
      </div>
      <YoutubeList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  .nav {
    display: flex;
    .input {
    }
    .btn {
      margin-left: 10px;
    }
  }
`;
