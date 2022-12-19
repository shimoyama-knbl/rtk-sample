import React, { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "~/app/store";
import { useAppDispatch } from "~/app/hooks";
import styled from "styled-components";
import * as Constants from "~/app/constants";
import * as YoutubeSlice from "~/features/youtube/youtubeSlice";

export const YoutubeList = () => {
  const state = useSelector((state: RootState) => state);
  const items = state.youtube.items;

  return (
    <Wrapper>
      <div className="thumbs">
        {(() => {
          if (items.length) {
            return items.map((item, id) => {
              return (
                <img
                  key={id}
                  className="thumb"
                  src={item.snippet.thumbnails.medium.url}
                  alt=""
                />
              );
            });
          }
        })()}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 10px;
  .thumbs {
    display: flex;
    flex-direction: column;
    width: 200px;
  }
  .thumb + .thumb { 
    margin-top: 10px;
  }
`;
