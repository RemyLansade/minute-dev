import styled from "styled-components";

const Separator = styled.hr`
  display: block;
  margin: auto;
  border: 1px solid #a1bde7;
  width: 170px;
`;

const Button = styled.button`
  display: block;
  margin: auto;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: ${(props) => props.theme.colors.primary};
  height: 40px;
  width: 135px;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const Text = styled.p`
  display: block;
  margin: auto;
  font-size: 16px;
  line-height: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0 12px;
`;

const Content = styled.div`
  color: #000;
  display: none;
  padding: 20px;
  height: 250px;
  width: 250px;
  top: 60px;
  right: 0;
  background-color: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const ConnectionHover = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
`

const Container = styled.div`
  display: block;
  height: 60px;
  width: 250px;
  transition: 0.3s;
  background-color: ${(props) => props.theme.colors.primary};
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
  &:hover ${Content} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const DropdownConnection = () => {
  return (
    <Container data-testid="dropdown">
      <ConnectionHover>
        <i className="fas fa-user-circle fa-lg"></i>
        <Title>Connection</Title>
        <i className="fas fa-chevron-down fa-lg"></i>
      </ConnectionHover>
      <Content data-testid="content">
        <Text>Enregistre toi afin de participer à la communauté</Text>
        <Button>Inscription</Button>
        <Separator />
        <Text>Déjà inscrit ?</Text>
        <Button>Se connecter</Button>
      </Content>
    </Container>
  );
};

export default DropdownConnection;
