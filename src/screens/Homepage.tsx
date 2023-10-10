import { SocialBar } from "@components/Footer/SocialBar";
import { ThemeToggleButton } from "@components/ThemeToggle";
import styled from "styled-components";

export const HomeScreen: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <ThemeToggleButton />
      </HeaderContainer>
      <HomeContainer>
        <p>Coming soon ...</p>
      </HomeContainer>
      <FooterContainer>
        <SocialBar />
      </FooterContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 32px;
  max-width: 1200px;
  width: 90%;
  padding: 32px 0;
  color: ${({ theme }) => theme.colors.text.contrast};
`;

const FooterContainer = styled.footer`
  width: 100%;
  padding: 32px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.colors.text.contrast};

  svg path {
    fill: ${({ theme }) => theme.colors.text.contrast};
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.contrast};
  font-size: 2rem;
  font-weight: 500;
`;
