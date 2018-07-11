import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import PropTypes from 'prop-types';

import { PanelTitle, PanelSubtitle, PanelContentLabel, PanelContentMinorLabel } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn, Column } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import { SmallSpacer, MediumSpacer, LargeSpacer, XXXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { mediaQueryMin, mediaQueryMax } from '~/modules/core/utils/cssHelpers/cssMedia';

import HomePageLogo from '~/modules/coreUI/components/projects/HomePageLogo';

const PanelImage = styled(HomePageLogo)`
  height: unset;
  width: unset;
  max-height: 80px;
`;

const Panel = styled(Column)`
  width: 300px;
`;

const renderHeaderSection = () => (
  <CenterAlignedColumn>
    <PanelTitle uppercase>
      REGISTER
    </PanelTitle>
    <SmallSpacer />
    <PanelSubtitle>
      Join our community
    </PanelSubtitle>
  </CenterAlignedColumn>
);

// eslint-disable-next-line react/prop-types
const defaultPanelContentContainer = ({ children }) =>
  <CenterAlignedColumn style={{ width: '100%' }}>{ children }</CenterAlignedColumn>;

const LoginFormPanel = ({ panelContentContainer }) => {
  const ContentContainer = panelContentContainer || defaultPanelContentContainer;

  return (
    <Panel topAligned topJustified>
      <Media
        query={mediaQueryMin('desktop')}
        render={() => renderHeaderSection()}
      />
      <Column fullWidth alignCenter centerJustified grow>
        <ContentContainer>
          <Media
            query={mediaQueryMin('desktop')}
            render={() => <PanelImage />}
          />
          <Media
            query={mediaQueryMax('desktop')}
            render={() => <XXXLargeSpacer />}
          />
          <PanelContentLabel >
            Do not have account ?
          </PanelContentLabel>
          <LargeSpacer />
          <BasicButton primary inverted>
            Create an account
          </BasicButton>
          <MediumSpacer />
          <PanelContentMinorLabel>
            {/* Placeholder to justify the Registeration to be similar to the login */}
            &nbsp;
          </PanelContentMinorLabel>
        </ContentContainer>
      </Column>
    </Panel>
  );
};

LoginFormPanel.propTypes = PropTypes.shape({
  panelContentContainer: PropTypes.element,
}).isRequired;

export default LoginFormPanel;
