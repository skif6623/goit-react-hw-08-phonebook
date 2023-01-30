import styled from 'styled-components';

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 700px;
  height: 60px;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 0 20px;
  border: 1px solid #88c894;
  border-radius: 4px;
`;

export const ContactName = styled.p`
  font-family: sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.06em;
`;

export const ContactNumber = styled.span`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.06em;
`;

export const ContactsMsg = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: 500;
`;

export const ContactsMsgSpan = styled.p`
  display: block;
  margin-bottom: 10px;
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  color: #1976d2;
`;
