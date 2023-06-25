import styled from '@emotion/styled';

export const Element = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border: solid 1px #000000;
  padding: 20px;
  flex-basis: calc((100% - 65px * 4) / 4);
  min-width: 230px;
  box-sizing: content-box;
  overflow: hidden;
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ErrorTitle = styled.h3`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ErrorText = styled.p`
  margin: 0;
  font-size: 30px;
  color: #8b8b8bdd;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
