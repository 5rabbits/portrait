import i18n from 'helpers/i18n'

export default ({ canCreate }) => (
  canCreate
    ? i18n.t('Select.inputPlaceholder.canCreate')
    : i18n.t('Select.inputPlaceholder.cantCreate')
)
