import React, { useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import useSWR from 'swr'
import MembrosTable from '../components/Tabela'


const fetcher = (...args) => fetch(...args).then(res => res.json())

const Batismo = (members) => {

    //const { data, error } = useSWR('/api/membros', fetcher)
    const [bat, setBat] = useState(members.json)
    //    console.log(bat)

    function handleChange(evt) {

        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    async function save() {
        console.log('teste')
        const res = await fetch(
            'http://localhost:3000/api/[pdf]',
            {
                body: {bat}
                ,
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )

    }
    const handleClick = (e) => {
        console.log('Free pizza!');
        console.log(e);
    }


    return (<>

        <div class="container flex flex-col">
            <button onClick={() => fetch(
                'http://localhost:3000/api/[pdf]',
                {
                    body: JSON.stringify(
                        bat
                    ),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST'
                }
            )
            } class="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Imprimir
            </button>
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div>

                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nome
                                </th>
                                {/* <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Data
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    CEM
                                </th> */}
                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            {bat.map((nome, key, CEM, data) => (
                                <tr key={key}>
                                    <td class="px-3 py-2 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 h-4 w-10">
                                                {key + 1}
                                            </div>
                                            {/* <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900">
                                                    {nome.Nomes}
                                                </div>
                                                <div class="text-sm text-gray-500">
                                                    {nome.data}
                                                </div>
                                            </div> */}
                                        </div>
                                    </td>
                                    <td class="px-3 py-2 whitespace-nowrap">
                                        <div class="text-sm text-gray-900"> {nome.Nomes}</div>
                                        <div class="text-sm text-gray-500">{nome.CEM}</div>
                                    </td>

                                    <td class="px-3 py-2 whitespace-nowrap text-right text-sm font-medium">
                                        {/* <a href="http://localhost:3000/api/pdf" class="text-indigo-600 hover:text-indigo-900">Imprimir Certificado</a> */}
                                        <Link href={{
                                            pathname: '/api/[pdf]',
                                            query: {
                                                nome: nome.Nomes,
                                            },
                                        }}>
                                            <a>Imprimir Certificado</a>
                                        </Link>
                                    </td>

                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
    )
}


Batismo.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:3000/api/google')
    const json = await res.json()
    // console.log(json)
    return {
        json
    }
}


export default Batismo