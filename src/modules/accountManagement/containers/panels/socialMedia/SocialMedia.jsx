import React from 'react';
import { Trans } from 'react-i18next';
import styled from 'styled-components';
import Icon from '~/modules/coreUI/components/basic/Icon';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { CenterAlignedColumn, RightAlignedColumn, LeftAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { XSmallTitle, WhiteXSmallTitle, WhiteXXXSmallTitle } from '~/modules/accountManagement/components/basic/Labels';
import { XXXXXLargeSpacer, MediumSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';

const FaceBookColumn = styled(CenterAlignedColumn)`
  background-color: #3b5998;
  width: 117px;
  margin-right: 10px;
  text-align: center;
  height:35px;
  color: white;
  display:flex;
  justify-content:center;
  flex-direction: row;
  border-radius:3px;
  @media (max-width: 1024px) {
   width:35px;
   height:35px;
  }
`;
const TwitterColumn = styled(CenterAlignedColumn)`
  background-color: #1da1f2;
  width: 117px;
  margin-right: 10px;
  text-align: center;
  height:35px;
  color: white;
  display:flex;
  justify-content:center;
  flex-direction: row;
  border-radius:3px;
  @media (max-width: 1024px) {
   width:35px;
   height:35px;
  }
`;
const GooglePlusColumn = styled(CenterAlignedColumn)`
  background-color: #db4437;
  width: 117px;
  margin-right: 10px;
  text-align: center;
  height:35px;
  color: white;
  display:flex;
  justify-content:center;
  flex-direction: row;
  border-radius:3px;
  @media (max-width: 1024px) {
   width:35px;
   height:35px;
  }
`;
const InstColumn = styled(CenterAlignedColumn)`
  background: #f09433;
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  width: 117px;
  margin-right: 10px;
  text-align: center;
  height:35px;
  color: white;
  display:flex;
  justify-content:center;
  flex-direction: row;
  border-radius:3px;
  @media (max-width: 1024px) {
   width:35px;
   height:35px;
  }
`;
const CenteredRow = styled(CenterAlignedRow)`
justify-content:center;
`;

const LeftIcon = styled(LeftAlignedColumn)`
    width: 28px;
    font-size: 23px;
    @media (max-width:1024px){
      font-size: 27px;
      padding-left: 1px;
    }
`;
const RightCont = styled(RightAlignedColumn)`
  color:white;
  text-align:left;
  align-items: flex-start;
  padding-top: 4px;
  @media (max-width: 1024px) {
   display:none;
  }

`;

export default function SocialMedia() {
  return (
    <CenteredRow className="SocialMediaCont">
      <CenterAlignedColumn>
        <XXXXXLargeSpacer />
        <CenterAlignedColumn>
          <XSmallTitle>
            <Trans i18nKey="CONNECTWITH" />
          </XSmallTitle>
          <MediumSpacer />
        </CenterAlignedColumn>
        <CenterAlignedRow>
          <FaceBookColumn>
            <LeftIcon>
              <Icon className="icon-fb" />
            </LeftIcon>
            <RightCont className="IconsCont">
              <WhiteXXXSmallTitle>
                <Trans i18nKey="LogInWith" />
              </WhiteXXXSmallTitle>
              <WhiteXSmallTitle>
                <Trans i18nKey="Facebook" />
              </WhiteXSmallTitle>
            </RightCont>
          </FaceBookColumn>
          <TwitterColumn>
            <LeftIcon>
              <Icon className="icon-twitter" />
            </LeftIcon>
            <RightCont className="IconsCont">
              <WhiteXXXSmallTitle>
                <Trans i18nKey="LogInWith" />
              </WhiteXXXSmallTitle>
              <WhiteXSmallTitle>
                <Trans i18nKey="Twitter" />
              </WhiteXSmallTitle>
            </RightCont>
          </TwitterColumn>
          <GooglePlusColumn>
            <LeftIcon>
              <Icon className="icon-googlepls" />
            </LeftIcon>
            <RightCont className="IconsCont">
              <WhiteXXXSmallTitle>
                <Trans i18nKey="LogInWith" />
              </WhiteXXXSmallTitle>
              <WhiteXSmallTitle>
                <Trans i18nKey="GooglePlus" />
              </WhiteXSmallTitle>
            </RightCont>
          </GooglePlusColumn>
          <InstColumn>
            <LeftIcon>
              <Icon className="icon-inst" />
            </LeftIcon>
            <RightCont className="IconsCont">
              <WhiteXXXSmallTitle>
                <Trans i18nKey="LogInWith" />
              </WhiteXXXSmallTitle>
              <WhiteXSmallTitle>
                <Trans i18nKey="Instagram" />
              </WhiteXSmallTitle>
            </RightCont>
          </InstColumn>
        </CenterAlignedRow>
      </CenterAlignedColumn>
    </CenteredRow>
  );
}
