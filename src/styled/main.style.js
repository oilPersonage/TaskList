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
