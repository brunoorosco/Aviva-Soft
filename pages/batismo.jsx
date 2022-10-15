import React, { useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import useSWR from 'swr'
import MembrosTable from '../components/Tabela'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Batismo = members => {
	//const { data, error } = useSWR('/api/membros', fetcher)
	const [bat, setBat] = useState(members.json)
	//    console.log(bat)

	function handleChange(evt) {
		const value = evt.target.value
		const key = evt.target.name
		setForm(old => ({
			...old,
			[key]: value,
		}))
	}

	async function save() {
		console.log('teste')
		const res = await fetch('http://localhost:3000/api/[pdf]', {
			body: { bat },
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		})
	}
	function handleClick(e) {
		e.preventDefault()
		console.log('The link was clicked.')
	}

	return (
		<>
			<div className="flex flex-col max-w-6xl mx-auto">
				<div className="justify-center">
					<p className="mt-2 mb-1 text-2xl">Batizandos</p>
				</div>
				{/* <button
					onClick={() =>
						fetch('http://localhost:3000/api/[pdf]', {
							body: JSON.stringify(bat),
							headers: {
								'Content-Type': 'application/json',
							},
							method: 'POST',
						})
					}
					className="px-4 py-2 mx-auto font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
				>
					Imprimir
				</button> */}
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
						<div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"></div>

						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
									>
										ID
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
									>
										Nome
									</th>
									{/* <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                    Data
                                </th>
                                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                    CEM
                                </th> */}
									<th scope="col" className="relative px-6 py-3">
										<span className="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{bat.map((list, key) => (
									<tr key={key}>
										<td className="px-3 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="flex-shrink-0 w-10 h-4">
													<p>{key + 1}</p>
												</div>
											</div>
										</td>
										<td className="px-3 py-2 whitespace-nowrap">
											<div className="text-sm text-gray-900"> {list.Nomes}</div>
											<div className="text-sm text-gray-500">{list.CEM}</div>
										</td>

										<td className="px-3 py-2 text-sm font-medium text-right whitespace-nowrap">
											{/* <a href="http://localhost:3000/api/pdf" className="text-indigo-600 hover:text-indigo-900">Imprimir Certificado</a> */}

											<Link
												replace
												href={{
													pathname: '/api/pdf/[id]',
													query: {
														nome: list.Nomes,
														data: list.data,
													},
												}}
											>
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

Batismo.getInitialProps = async ctx => {
	const res = await fetch('http://localhost:3000/api/google')
	const json = await res.json()
	return {
		json,
	}
}

export default Batismo
