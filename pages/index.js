import React, { useState } from 'react'
import styles from './styles.module.css'
import Login from './../components/Auth'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {

    const [form, setForm] = useState({
        origem: '',
        destino: '',
        plano: ''
    })

    const { destino, setDestino } = useState("")
    const { plano, setPlano } = useState("")

    function handleChange(evt) {

        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    function save(evt) {
        console.log(evt)
    }
    return (
        <div className='' >

            <Login />
{/*           
            <div className='pt-6'>
                <div className="container mx-auto text-center">
                    <div className="flex justify-center">
                        <input type="text"
                            name="origem"
                            placeholder="Origem"
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>
                    <div className="flex justify-center">
                        <input type='text'
                            className={styles.input}
                            placeholder='Destino'
                            name="destino"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button className='bg-blue-400 px-12 block py-4 font-bold  rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
                    </div>
                    <pre>
                        {JSON.stringify(form, null, 2)}
                    </pre>
                </div>
            </div> */}

        </div>
    )
}

export default Index