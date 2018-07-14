import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import PropTypes from 'prop-types';

import { PanelContentLabel, PanelContentMinorLabel } from '~/modules/accountManagement/components/basic/Labels';
import Panel from '~/modules/accountManagement/components/basic/Panel';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import { MediumSpacer, XLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { mediaQueryMin } from '~/modules/core/utils/cssHelpers/cssMedia';
import { Column } from '~/modules/coreUI/components/layouts/helpers/Columns';

import HomePageLogo from '~/modules/coreUI/components/projects/HomePageLogo';

const MediumLogo = styled(HomePageLogo)`
  height: unset;
  width: unset;
  max-width: 80px;
`;

const PanelImage = () => (
  <Column grow centerAligned>
    <MediumLogo />
  </Column>
);

const renderContent = () => (
  <React.Fragment>
    <PanelContentLabel >
      {"Don't have an account ?"}
    </PanelContentLabel>
    <XLargeSpacer />
    <BasicButton primary inverted>
      Create an account
    </BasicButton>
    <MediumSpacer />
    <PanelContentMinorLabel>
      {/* Placeholder to justify the Registeration to be similar to the login */}
      &nbsp;
    </PanelContentMinorLabel>
  </React.Fragment>
);

const SignUpFormPanel = (props) => {
  const ContentContainer = props.panelContentContainer;

  return (
    <Media query={mediaQueryMin('desktop')}>
      {matched => (
        <Panel showHeader={matched} titleLabel="Register" subTitleLabel="Join our community">
          <ContentContainer>
            {matched && <PanelImage />}
            {renderContent(props)}
          </ContentContainer>
        </Panel>
      )}
    </Media>
  );
};

SignUpFormPanel.propTypes = PropTypes.shape({
  panelContentContainer: PropTypes.element,
}).isRequired;

export default SignUpFormPanel;
