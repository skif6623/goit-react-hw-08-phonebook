import styled from 'styled-components';
import { Form } from 'formik';

export const Error = styled.div`
  color: red;
`;

export const ContactsTitle = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`;

export const AddForm = styled(Form)`
  margin: 0 auto;
  max-width: 500px;
  margin-bottom: 50px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 1.1666666667;
  letter-spacing: 0.01em;
  color: #757575;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 20px;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  :focus {
    border: 1px solid #2196f3;
    border-radius: 4px;

    outline: none;
  }
`;

export const FormBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  min-width: 150px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.875;
  text-align: center;
  letter-spacing: 0.06em;
  color: white;
  background-color: #2196f3;
  border-radius: 4px;
  border: rgba(0, 0, 0, 0);
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);

  :hover,
  :focus {
    background-color: #188ce8;
  }
`;
