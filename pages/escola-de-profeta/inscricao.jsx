import React, { useState } from 'react'
import styles from '../styles.module.css'
import axios from 'axios'
import Toast from '../../components/Toast'
import Image from 'next/image'
import logo from '../../public/logo.png'

const Index = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    church: ''
  })

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
            <div className="flex justify-center">
              <input
                type="text"
                name="name"
                placeholder="Nome Completo"
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className="flex justify-center">
              <input
                type="text"
                className={styles.input}
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center">
              <input
                type="text"
                className={styles.input}
                placeholder="WhatsApp"
                name="phone"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center">
              <select
                type="text"
                className={styles.input}
                name="church"
                onChange={handleChange}
              >
                <option selected disabled>
                  Selecione sua Igreja
                </option>
                <option value={'sede'}>Sede</option>
                <option value={'guarulhos'}>Guarulhos</option>
                <option value={'itaqua1'}>Itaqua I</option>
                <option value={'sapopemba'}>Sapopemba</option>
                <option value={'suzano'}>Suzano</option>
                <option value={'itaqua2'}>Itaqua II</option>
                <option value={'itu'}>Itu</option>
                <option value={'curitiba'}>Curitiba</option>
              </select>
            </div>
            <div className="flex justify-center  ">
              <button className={styles.button} type="submit">
                Cadastrar
              </button>
            </div>
            {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Index
