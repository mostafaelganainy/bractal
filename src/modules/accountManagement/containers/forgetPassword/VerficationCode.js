import React from 'react';
import { PanelTitle, PanelSubtitle, ParagraphFooterContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import Modal from '~/modules/core/components/Modal/index';
// import EmailContent from '~/modules/accountManagement/containers/forgetPassword/EmailVerify';
import RelayForm from '~/modules/coreUI/components/basic/RelayForm';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import { MediumSpacer, XXXXXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { Trans, translate } from 'react-i18next';

const VerficationCode = () => (
  <Modal>
    <div>
      <CenterAlignedColumn style={{
         width: '300px', backgroundColor: 'white', margin: '0 auto', borderRadius: '10px',
    }}>
        <PanelTitle uppercase>
          <Trans i18nKey="headerTitle" />
        </PanelTitle>
        <PanelSubtitle>
          <Trans i18nKey="Followthestepstoresetyourpassword" />
        </PanelSubtitle>
        <XXXXXLargeSpacer />
        {/* <EmailContent /> */}
        <MediumSpacer />
        <RelayForm
          options={[
            {
              name: 'code',
              placeholder: 'Add Code Here',
              input_type: 'textbox',
              tcomb_type: 'String',
            },
          ]}
        />
        <MediumSpacer />
        <BasicButton width="90%"> Reset your password </BasicButton>
        <XXXXXLargeSpacer />
        <ParagraphFooterContent>
          <CenterAlignedRow>
           Copyright © 2018, aykmall.com. All Rights Reserved.
          </CenterAlignedRow>
        </ParagraphFooterContent>
      </CenterAlignedColumn>
    </div>
  </Modal>
);

export default translate('accountManagement')(VerficationCode);
