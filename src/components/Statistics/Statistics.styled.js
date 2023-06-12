import { styled } from 'styled-components';
import { getRandomHexColor } from 'helpers/getRandomColor';

export const Title = styled.h2`
  padding: 30px;
  text-transform: uppercase;
  background-color: #fff;
`;
export const StatisticsSection = styled.section`
  width: 400px;
  margin: 80px auto;
  text-align: center;
`;
export const StatList = styled.ul`
  display: flex;
`;
export const StatItem = styled.li`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #fff;
  background-color: ${getRandomHexColor};
`;
export const Percentage = styled.span`
  font-size: 24px;
`;
