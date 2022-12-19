import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Constants from "~/app/constants";

export const Gnav = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => (e: any) => {
    navigate(path);
  };

  return (
    <Wrapper>
      <ul>
        <li onClick={handleClick(Constants.PAGE_PATHS.home)}>HOME</li>
        <li onClick={handleClick(Constants.PAGE_PATHS.sample)}>SAMPLE</li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  ul {
    display: flex;
  }
  li {
    cursor: pointer;
    padding: 2px 10px;
    & + li {
      border-left: ${Constants.COLORS.gray[0]};
    }
  }
`;
