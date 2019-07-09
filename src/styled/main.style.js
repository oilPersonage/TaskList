import styled from 'styled-components'

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 50px;
`
export const FormContainer = styled.form`
  padding: 25px;
  display: flex;
  flex-direction: column;
  input[type="submit"] {
    width: max-content;
  }
`
export const Label = styled.label`
  width: ${p => p.short ? '400px' : '100%'};
  input, textarea {
    width: 100%
  }
  textarea {
    height: 60px;
    resize: none;
  }
`
export const Title = styled.h2`
  text-align: center;
`
export const ListContainer = styled.ul`
  text-align: center;
  padding: 0 25px;
  list-style: none;
`
export const ItemBox = styled.li`
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,.1);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  padding: 15px 25px;
  background: ${p => p.completed ? '#fafafa' : 'transparent'};
  p {
    margin: 0;
    flex-grow: 3;
  }
  svg {
    padding: 10px;
    cursor: pointer;
    path {
      transition: 0.1s;
    }
    &:hover {
      path {
        fill: orange
      }
    }
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const FilterBox = styled.div`
  display: flex;
  padding: 0 25px;
  p {
    margin: 5px 15px 5px 0;
  }
  > svg {
    padding: 5px;
    cursor: pointer;
  }
`
