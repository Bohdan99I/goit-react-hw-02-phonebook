import styled from '@emotion/styled';

export const ContactListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContactListItem = styled.li`
  height: 75px;
  padding: 10px 15px;
  border: 2px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: rgb(129, 159, 237);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const ContactName = styled.p`
  margin-bottom: 10px;
`;

export const ContactButton = styled.button`
  border-radius: 4px;
  padding: 5px 10px;
  background: rgb(15, 111, 66);
  color: white;
  font-size: 16px;
  cursor: pointer;
`;