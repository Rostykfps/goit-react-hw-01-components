import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: 80px auto;
  text-align: center;

  background-color: #fff;
  box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
`;
export const Description = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #808080;
`;
export const Avatar = styled.img`
  display: inline-block;
  margin: 40px auto;
  max-width: 200px;
  border-radius: 50%;
  background-color: rgb(223, 223, 223, 0.5);
`;
export const Name = styled.p`
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: 700;
  color: #000;
`;
export const Tag = styled.p`
  margin-bottom: 10px;
`;
export const Location = styled.p`
  margin-bottom: 20px;
`;
export const Stats = styled.ul`
  display: flex;
  background-color: #dcdcdc;
`;
export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid #808080;
`;
export const Label = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #808080;
`;
export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #000;
`;
