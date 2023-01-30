import React, { useState } from 'react'
import axios from 'axios'
import Toast from '../../components/Toast'
import Image from 'next/image'
import logo from '../../public/logo.png'
import TextInput from '../../components/Input'
import { Masks } from '../../utils/masks'
import Select from '../../components/Select'
import * as S from './styles'

const churchName = [
  { value: 'sede', label: 'Sede' },
  { value: 'guarulhos', label: 'Guarulhos' },
  { value: 'itaqua1', label: 'Itaqua I' },
  { value: 'sapopemba', label: 'Sapopemba' },
  { value: 'suzano', label: 'Suzano' },
  { value: 'itaqua2', label: 'Itaqua II' },
  { value: 'itu', label: 'Itu' },
  { value: 'curitiba', label: 'Curitiba' }
]

const Index = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    church: ''
  })

  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
      const response = await axios.post('/api/escola-profeta/new', form)
      if (response.status === 201) {
        Toast.showSuccess(
          `${response.data.name}, sua inscrição foi realizada com sucesso!!!`
        )
        setForm({ name: '', email: '', phone: '', church: '' })
      }
    } catch (error) {
      Toast.showError('Não foi possível completar sua inscrição')
    }
  }

  return (
    <S.Container>
      <S.ContainerImage>
        <Image src={logo} width={200} />
      </S.ContainerImage>
      <S.BoxTitle>
        <S.Title>Inscrição escola de Profeta</S.Title>
        <S.Text>Valor R$ 50,00</S.Text>
        <S.Text>Pix para pagamentos </S.Text>
        <S.Text>CNPJ: 23.077.271/0001-40</S.Text>
      </S.BoxTitle>
      <S.ContainerForm onSubmit={handleSubmit} id="form_escola">
        <S.BoxInput>
          <TextInput
            name="name"
            placeholder="Nome Completo"
            value={form.name}
            onChange={(value) =>
              setForm((currenty) => {
                return {
                  ...currenty,
                  name: Masks.clearName(value).toUpperCase()
                }
              })
            }
          />
        </S.BoxInput>
        <S.BoxInput>
          <TextInput
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={(value) =>
              setForm((currenty) => {
                return { ...currenty, email: value.toLowerCase() }
              })
            }
          />
        </S.BoxInput>
        <S.BoxInput>
          <TextInput
            placeholder="WhatsApp"
            name="phone"
            value={form.phone}
            onChange={(value) =>
              setForm((currenty) => {
                return { ...currenty, phone: Masks.phone(value) }
              })
            }
          />
        </S.BoxInput>
        <S.BoxInput>
          <Select
            options={churchName}
            title={'Selecione sua Igreja'}
            value={form.church}
            onChange={(event) =>
              setForm((currenty) => {
                return { ...currenty, church: event.target.value }
              })
            }
          />
        </S.BoxInput>

        <S.BoxButton>
          <S.Button type="submit">Cadastrar</S.Button>
        </S.BoxButton>
      </S.ContainerForm>
    </S.Container>
  )
}

export default Index
