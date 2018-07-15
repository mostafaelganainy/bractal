import React from 'react';
import { Trans } from 'react-i18next';
import Icon from '~/modules/coreUI/components/basic/Icon';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { XXXSmallTitle, XSmallTitle } from '~/modules/accountManagement/components/basic/Labels';

export default function SocialMedia() {
  return (
    <CenterAlignedRow className="SocialMediaCont">
      <CenterAlignedColumn>
        <XSmallTitle>
          <Trans i18nKey="CONNECTWITH" />
        </XSmallTitle>
      </CenterAlignedColumn>
      <CenterAlignedColumn>
        <div className="faceBok TextCenter">
          <Icon className="icon-fb" />
          <div className="IconsCont">
            <XXXSmallTitle>
              <Trans i18nKey="LogInWith" />
            </XXXSmallTitle>
            <XSmallTitle>
              <Trans i18nKey="Facebook" />
            </XSmallTitle>

          </div>
        </div>
        <div>
          <Icon className="icon-twitter" />
          <div className="IconsCont">
            <XXXSmallTitle>
              <Trans i18nKey="LogInWith" />
            </XXXSmallTitle>
            <XSmallTitle>
              <Trans i18nKey="Twitter" />
            </XSmallTitle>

          </div>
        </div>
        <div>
          <Icon className="icon-googleplus" />
          <div className="IconsCont">
            <XXXSmallTitle>
              <Trans i18nKey="LogInWith" />
            </XXXSmallTitle>
            <XSmallTitle>
              <Trans i18nKey="GooglePlus" />
            </XSmallTitle>

          </div>
        </div>
        <div>
          <Icon className="icon-inst" />
          <div className="IconsCont">
            <XXXSmallTitle>
              <Trans i18nKey="LogInWith" />
            </XXXSmallTitle>
            <XSmallTitle>
              <Trans i18nKey="Instagram" />
            </XSmallTitle>
          </div>
        </div>
      </CenterAlignedColumn>

    </CenterAlignedRow>
  );
}
