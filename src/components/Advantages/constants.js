import Package from '@/assets/icons/icon-package.svg'
import Courier from '@/assets/icons/icon-courier.svg'
import Operator from '@/assets/icons/icon-operator.svg'
import Label from '@/assets/icons/icon-label.svg'
import Replacement from '@/assets/icons/icon-replacement.svg'
import Toolbox from '@/assets/icons/icon-toolbox.svg'

const LIST = [
  {
    Icon: Package,
    label: { uk: 'Великий асортимент', ro: 'O gamă largă de produse' },
  },
  {
    Icon: Courier,
    label: { uk: 'Оперативна доставка', ro: 'Livrare promptă' },
  },
  {
    Icon: Operator,
    label: {
      uk: 'Кваліфікований підбір запчастин',
      ro: 'Selecție calificată de piese de schimb',
    },
  },
  {
    Icon: Label,
    label: { uk: 'Оригінальні запчастини', ro: 'Piese de schimb originale' },
  },
  {
    Icon: Replacement,
    label: {
      uk: 'Індивідуальна гарантія та заміна',
      ro: 'Garanție și înlocuire individuklă',
    },
  },
  {
    Icon: Toolbox,
    label: { uk: 'Додаткове обладнення', ro: 'Echipament suplimentar' },
  },
]

export default LIST
