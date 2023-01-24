import React, { useState } from 'react'
import styles from '../styles.module.css'
import axios from 'axios'
import Toast from '../../components/Toast'
import Image from 'next/image'
import logo from '../../public/logo.png'
import TextInput from '../../components/Input'
import { Masks } from '../../utils/masks'
import Select from '../../components/Select'

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
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [church, setChurch] = useState()

  function handleChange(evt) {
    const value = evt.target.value
    const key = evt.target.name
    setForm((old) => ({
      ...old,
      [key]: value
    }))
  }

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
    <div className="md: w-full bg-gray-200 max-h-screen h-screen">
      <div className="justify-center text-center flex">
        <Image src={logo} width={200} />
      </div>
      <div className="text-center pt-3">
        <p className="text-xl font-semibold">Inscrição escola de Profeta</p>
        <p className="text-base">Valor R$ 50,00</p>
        <p className="text-base">
          Pix para pagamentos CNPJ: 23.077.271/0001-40
        </p>
      </div>
      <form onSubmit={handleSubmit} id="form_escola">
        <div className="pt-6">
          <div className="container mx-auto text-center">
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

            <div className="flex justify-center  ">
              <button className={styles.button} type="submit">
                Cadastrar
              </button>
            </div>
            <pre>{JSON.stringify(form, null, 2)}</pre>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Index
