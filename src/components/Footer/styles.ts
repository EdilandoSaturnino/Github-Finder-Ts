import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 1rem 0;
`;

export const FooterContent = styled.div``;

export const FooterText = styled.p`
  color: ${(props: any) => props.theme['white']};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;
