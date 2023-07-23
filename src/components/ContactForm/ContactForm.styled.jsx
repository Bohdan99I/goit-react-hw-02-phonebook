import styled from '@emotion/styled';

export const Form = styled.form`
  border: 2px solid red;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(129, 159, 237);
`;

export const FormLabel = styled.label`
  font-size: 25px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  gap: 5px;
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 4px;
`;

export const Button = styled.button`
  margin: 0px auto;
  border-radius: 4px;
  padding: 5px 10px;
  background: rgb(90, 130, 150);
  color: white;
  font-size: 15px;
`;