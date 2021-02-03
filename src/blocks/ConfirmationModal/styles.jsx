import styled from "styled-components";

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > *  {
    margin-top: 1rem;
  }
`

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export { ContentDiv, ButtonDiv };
