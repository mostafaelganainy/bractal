import React from 'react';
import styled, { withTheme } from 'styled-components';
import changeCase from 'change-case';

import { ErrorLabel } from '~/modules/coreUI/components/basic/Labels';
import { LeftAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import EllipsisWithTooltip from '~/modules/coreUI/components/basic/EllipsisWithToolitp';


const InputsIntraSpace = styled(LeftAlignedColumn)`
  width:  100%; 
  height: ${props => props.theme.paddings.xxxLarge}px;
  padding-left: ${props => props.theme.inputs.padding.left + 1}px;
  padding-right: ${props => props.theme.inputs.padding.right}px;
  padding-top: ${props => props.theme.paddings.xSmall}px;
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
  const fieldName = locals.attrs.displayName || (
    locals.path && locals.path.length > 0 && locals.path[0]
  );

  const displayName = locals.attrs.displayName || changeCase.sentence(fieldName);

  const localValidationErrors = locals.context.localValidationErrors || {};
  const serverErrors = (locals.context && locals.context.serverErrors) || {};

  let errorMessage = locals.hasError && locals.error;
  errorMessage = errorMessage || localValidationErrors[fieldName];

  if (errorMessage) {
    errorMessage = `${displayName}, ${errorMessage}`;
  }

  errorMessage = errorMessage || serverErrors[fieldName];
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
