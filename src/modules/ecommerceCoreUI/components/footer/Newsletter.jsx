import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import RelayForm from '~/modules/coreUI/components/basic/RelayForm';
import { SectionHeader } from '~/modules/ecommerceCoreUI/components/basic/Labels';
import { Spacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';

const NewsletterWrapper = styled.div`
  .InputLayout{
    width:100% !important;
  }
  .form-group.form-group-depth-1.form-group-Enter.Your.Email{
    position: relative;
    width: 50%;
    :after {
      content: '\\E803';
      font-family: fontello, sans-serif;
      color: #09b4f1;
      position: absolute;
      right: 15px;
      font-size: 20px;
      top: 20px;
    }
  }
`;
const Newsletter = () => (
  <NewsletterWrapper>
    <Container>
      <SectionHeader>Join Our Newsletter</SectionHeader>
      <Spacer size={9} />
      <RelayForm
        options={[
              {
                name: 'Enter Your Email',
                placeholder: 'Enter Your Email',
                input_type: 'textbox',
                tcomb_type: 'String',
              },
            ]}
      />
      <Spacer size={32} />
    </Container>
  </NewsletterWrapper>
);

export default Newsletter;
