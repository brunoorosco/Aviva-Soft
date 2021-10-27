import React, { useState } from 'react'
import styles from './styles.module.css'
import useSWR from 'swr'
import MembrosTable from '../components/Tabela'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Membros = (members) => {

    //const { data, error } = useSWR('/api/membros', fetcher)
  //  console.log(members.user[0])
    const [membros, setMembros] = useState({

    })
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
        <div>
            <div className='pt-6'>
                <div className="container mx-auto text-center">
                   <div className="flex justify-center">
                        <MembrosTable > {members} </MembrosTable>
                    </div>
                  
                    <pre>
                        {JSON.stringify(form, null, 2)}
                    </pre>
                </div>
            </div>

        </div>
    )
}


Membros.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:3000/api/membros')
    const json = await res.json()
   // console.log(json)
    return { user: json.user}
  }
  

export default Membros