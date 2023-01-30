import React from 'react';
import { EuiPageHeader, EuiPageHeaderSection, EuiTitle } from '@elastic/eui';

 const Header = () => (
  <EuiPageHeader bottomBorder>
    <EuiPageHeaderSection>
      <EuiTitle size="l">
        <h1>DMM</h1>
      </EuiTitle>
    </EuiPageHeaderSection>
  </EuiPageHeader>
);

export default Header;