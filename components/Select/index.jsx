import * as S from './styles'

const Select = ({ options, value, onChange, title }) => {
  return (
    <S.Select value={value} onChange={(event) => onChange && onChange(event)}>
      <option value="" disabled>
        {title}
      </option>
      {options.map((opt, index) => (
        <option key={opt.value + index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </S.Select>
  )
}

export default Select
