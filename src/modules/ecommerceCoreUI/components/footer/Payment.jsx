import React from 'react';
import styled from 'styled-components';
import ExternalLink from '~/modules/coreUI/components/basic/ExternalLink';


const PaymentWrapper = styled.div`
  margin-left: 60px;
  img {
    margin-right:10px;
  }
`;
const Payment = () => (
  <PaymentWrapper>
    <ExternalLink url="#">
      <img src="images/Footer/visa.png" alt="" />
    </ExternalLink>
    <ExternalLink url="#">
      <img src="images/Footer/master.png" alt="" />
    </ExternalLink>
  </PaymentWrapper>
);

export default Payment;
