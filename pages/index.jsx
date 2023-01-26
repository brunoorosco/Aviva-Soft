import React, { useState } from 'react'
import Login from '../components/Auth'

const Index = () => {
  const [form, setForm] = useState({
    origem: '',
    destino: '',
    plano: ''
  })

  const { destino, setDestino } = useState('')
  const { plano, setPlano } = useState('')

  function handleChange(evt) {
    const value = evt.target.value
    const key = evt.target.name
    setForm((old) => ({
      ...old,
      [key]: value
    }))
  }

  return <Login />
}

export default Index
