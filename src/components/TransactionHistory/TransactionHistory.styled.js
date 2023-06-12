import { styled } from 'styled-components';

export const TableTransactionHistory = styled.table`
  width: 800px;
  margin: 80px auto;
  text-align: center;
  box-shadow: 0px 8px 8px -3px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;
export const TableHead = styled.thead`
  height: 50px;
  text-transform: uppercase;
`;
export const TableHeadRow = styled.tr`
  color: #fff;
  background-color: #47abcd;
`;
export const TableRow = styled.tr`
  text-transform: capitalize;
  height: 50px;
  color: #808080;
  font-weight: 500;
  &:nth-child(2n) {
    background-color: #fff;
  }
  &:nth-child(2n-1) {
    background-color: #e1e1e1;
  }
`;
