import { useSelector } from "react-redux"
import { RootState } from '~/app/store'
import { CircularProgress } from '@mui/material'
import styled from "styled-components"

export const Loading = () => {
    const show = useSelector((state: RootState) => state.loading.show);

    if (!show) return <></>
    return (
        <Wrapper>
            <CircularProgress></CircularProgress>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000044;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
`