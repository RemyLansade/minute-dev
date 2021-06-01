import styled from 'styled-components'

const Container = styled.div`
  display: block;
  height: 60px;
  width: 250px;
  transition: 0.3s;
  background-color: ${(props) => props.theme.colors.primary};
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`

const HeaderSearch = () => {
  return(
    <Container >

    </Container>
  );
}

export default HeaderSearch