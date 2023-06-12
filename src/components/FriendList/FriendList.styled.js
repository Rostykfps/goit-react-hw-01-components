import { styled } from 'styled-components';

export const FriendsList = styled.ul`
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;
export const Item = styled.li`
  width: 400px;
  height: 80px;
  padding-left: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
`;
export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? '#008000' : '#ff0000')};
`;
