import React from 'react';
import styled, { withTheme } from 'styled-components';

import { ErrorLabel } from '~/modules/coreUI/components/basic/Labels';
import { LeftAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import EllipsisWithTooltip from '~/modules/coreUI/components/basic/EllipsisWithToolitp';


const InputsIntraSpace = styled(LeftAlignedColumn)`
  width:  100%; 
  height: ${props => props.theme.paddings.xxxLarge}px;
  padding-left: ${props => props.theme.buttons.padding}px;
  padding-right: ${props => props.theme.buttons.padding}px;
  padding-top: ${props => props.theme.paddings.small}px;
`;

const FullWidthErrorLabel = styled(ErrorLabel)`
  width: 100%;
`;

const ErrorEllipsisWithTooltip = withTheme(({ theme, children }) => (
  <EllipsisWithTooltip color={theme.colors.error}>
    {children}
  </EllipsisWithTooltip>
));

const renderError = (locals) => {
  let errorMessage = locals.hasError && locals.error;
  const serverErrors = locals.context && locals.context.serverErrors;
  const fieldName = locals.path && locals.path.length > 0 && locals.path[0];
  if (!errorMessage && serverErrors[fieldName]
  ) {
    errorMessage = serverErrors[fieldName];
  }

  errorMessage = errorMessage || <span>&nbsp;</span>;

  return (
    <InputsIntraSpace>
      <FullWidthErrorLabel>
        <ErrorEllipsisWithTooltip>
          {errorMessage}
        </ErrorEllipsisWithTooltip>
      </FullWidthErrorLabel>
    </InputsIntraSpace>
  );
};

export default renderError;
