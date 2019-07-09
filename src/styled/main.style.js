import styled from 'styled-components';

export const Container = styled.div`
  //max-width: 700px;
  margin: 0 auto;
  width: 100%;
  padding-top: 50px;
  font-family: sans-serif;
  display: flex;
  justify-content: center;  
  h2 {
    font-size: 20px;
  }
  font-size: 14px;
  * {
    box-sizing: border-box;
  }
  input, select, textarea {
    border-radius: 3px;
    padding: 10px 15px;
    border: none;
    background-color:#fafafa;
    box-shadow: inset 0 1px 3px rgba(0,0,0,.1);
  }
  select {
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,.1);
  }
  svg {
    min-width: 30px;
    padding: 7px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: orangered;
    border-radius: 3px;
    transition: 0.3s ease-out;
    margin-left: 5px;
    &:hover {
      box-shadow: 0 0 0 3px #ffa78b
    }
    path {
      fill: white
    }
  }
`;

export const SmallContainer = styled.div`
  margin: 0 15px;
  &:nth-child(2) {
    padding: 25px;
    background-color: #fefffd;
    border-radius: 3px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1)
  }
`
export const FormContainer = styled.form`
  padding: 25px;
  display: flex;
  flex-direction: column;
  input[type="submit"] {
    transition: 0.1s ease-out;
    width: max-content;
    box-shadow: 0 1px 3px rgba(0,0,0,.1);
    cursor: pointer;
    background: ${p => (p.noValid ? '#fafafa' : 'orangered')};
    color: ${p => (p.noValid ? 'gray' : 'white')};
    margin-top: 5px;
    &:hover {
      box-shadow: ${p => (!p.noValid ? '0 0 0 3px #ffa78b' : '0 1px 3px rgba(0,0,0,.1)')}
    }
  }
`;
export const Label = styled.label`
  width: ${p => (p.short ? '400px' : '100%')};
  input, textarea {
    width: 100%;
  }
  textarea {
    height: 60px;
    resize: none;
  }
`;
export const Title = styled.h2`
  text-align: center;
`;
export const ListContainer = styled.ul`
  text-align: center;
  padding: 0 25px;
  max-height: 630px;
  overflow: auto;
  list-style: none;
`;
export const ItemBox = styled.li`
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,.1);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  padding: 15px 25px;
  background: ${p => (p.completed ? '#fafafa' : 'transparent')};
  p {
    margin: 0;
    flex-grow: 3;
  }
  svg {
    cursor: pointer;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FilterBox = styled.div`
  margin-top: 25px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  padding: 0 25px;
  
  p {
    margin: 5px 15px 5px 0;
  }
  > svg {
    padding: 10px;
    cursor: pointer;
  }
`;
