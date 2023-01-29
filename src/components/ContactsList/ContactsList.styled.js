import styled from 'styled-components';

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding: 0 20px;
  border: 1px solid #88c894;
  border-radius: 4px;
`;

export const ContactName = styled.p`
  font-family: sans-serif;
  font-weight: 500;
  font-size: 14px;
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

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.875;
  letter-spacing: 0.06em;
  color: white;
  background-color: #ff0000cf;
  border-radius: 4px;
  border: rgba(0, 0, 0, 0);
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);

  :hover,
  :focus {
    background-color: #ff0000;
  }
`;
