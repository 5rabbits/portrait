/* eslint-disable react/prop-types */

import React from 'react'
import i18n from 'helpers/i18n'

export default ({ search }) =>
  <div className="Select__emptyView">
    {search
      ? i18n.t('Select.emptyView.noResults')
      : i18n.t('Select.emptyView.noOptions')
    }
  </div>
