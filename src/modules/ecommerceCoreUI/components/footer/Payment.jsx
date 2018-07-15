import React from 'react';
import styled from 'styled-components';
import ExternalLink from '~/modules/coreUI/components/basic/ExternalLink';


const PaymentWrapper = styled.div`
  img {
    margin-right:10px;
  }
`;
const Payment = props => (
  <PaymentWrapper {...props} >
    <ExternalLink url="#">
      <img src="images/Footer/visa.png" alt="" />
    </ExternalLink>
    <ExternalLink url="#">
      <img src="images/Footer/master.png" alt="" />
    </ExternalLink>
  </PaymentWrapper>
);

export default Payment;
