import React from 'react'
import * as S from './styles'

const TextInput = ({
  maxLength,
  placeholder,
  onChange,
  value,
  type,
  onBlur
}) => {
  return (
    <S.Input
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={(e) => onChange && onChange(e.target.value)}
      value={value}
      type={type}
      onBlur={onBlur}
    />
  )
}

export default TextInput
