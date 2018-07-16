import React from 'react';
import styled from 'styled-components';
import ExternalLink from '~/modules/coreUI/components/basic/ExternalLink';
import { LargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';


const PaymentWrapper = styled.div`
  img {
    margin-right:10px;
  }
`;
const Payment = props => (
  <PaymentWrapper {...props} >
    <LargeSpacer size={12} />
    <ExternalLink url="#">
      <img src="images/Footer/visa.png" alt="" />
    </ExternalLink>
    <ExternalLink url="#">
      <img src="images/Footer/master.png" alt="" />
    </ExternalLink>
    <ExternalLink url="#">
      <img src="images/Footer/visa-s.png" alt="" />
    </ExternalLink>
    <ExternalLink url="#">
      <img src="images/Footer/mastercard.png" alt="" />
    </ExternalLink>
  </PaymentWrapper>
);

export default Payment;
