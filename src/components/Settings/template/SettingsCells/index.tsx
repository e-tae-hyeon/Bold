import {VERSION} from 'common/constants/string';
import FlexView from 'components/@base/FlexView';
import SettingsCell from 'components/Settings/module/SettingsCell';
import React from 'react';

function SettingsCells() {
  return (
    <FlexView className="p-4">
      <SettingsCell label="버전정보" value={VERSION} />
    </FlexView>
  );
}

export default SettingsCells;
