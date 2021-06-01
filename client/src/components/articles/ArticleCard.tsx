import styled from "styled-components";

const Card = styled.div`
  background: url("https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2019.2F07.2F29.2F3573215a-1dbd-4360-afb7-b5801b7bb7fb.2Ejpeg/850x478/quality/90/crop-from/center/vrai-faux-10-idees-recues-sur-les-ampoules-a-economie-d-energie.jpeg")
    no-repeat center;
  position: relative;
  width: 450px;
  height: 280px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
  transition: 0.3s;
  &:hover {
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.65));
    cursor: pointer;
  }
`;

const CardFooter = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 10px;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: inset 17.3333px -17.3333px 17.3333px rgba(194, 194, 194, 0.1),
    inset -17.3333px 17.3333px 17.3333px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(34.6667px);
`;

const Title = styled.h3`
  display: block;
  width: 70%;
  color: #fff;
`;

const SocialIndicator = styled.h3`
  display: block;
  text-align: center;
  width: 30%;
  color: #fff;
`;

const ArticleCard = () => {
  return (
    <Card data-testid="article-card">
      <CardFooter>
        <Title>Idée de projet pour un jeune développeur</Title>
        <SocialIndicator></SocialIndicator>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
