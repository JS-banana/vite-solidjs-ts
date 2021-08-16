export interface ListProps {
  label: string
  value: number
}

export interface MonthProps {
  /**@description 月份 */
  month: number
  /**@description 离职 */
  dimission_num: number
  /**@description 入职 */
  entry_num: number
}

export interface DataProps {
  /**@description 1:博士;2:硕士;3:本科;4:大专;5:大专以下 */
  education: 1 | 2 | 3 | 4 | 5
  /**@description 女性人员 */
  female: number
  /**@description 男性人员 */
  male: number
  /**@description 待入职 */
  for_entry: number
  /**@description 待转正 */
  informal: number
  /**@description 待离职 */
  to_be_left: number
  /**@description 总人数 */
  total: number
  month: MonthProps[]
}

type EducationOptionProps = { [key: number]: number }

interface GenderOptionProps {
  name: string
  value: number
}

interface PieDataProps {
  education: EducationOptionProps
  gender: GenderOptionProps[]
}

export interface ValueType {
  list: ListProps[]
  month: MonthProps[]
  pieData: PieDataProps
}
