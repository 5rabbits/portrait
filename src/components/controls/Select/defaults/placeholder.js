import i18n from 'helpers/i18n'

export default ({ canCreate }) => (
  canCreate
    ? i18n.t('Select.placeholder.canCreate')
    : i18n.t('Select.placeholder.cantCreate')
)
