import React, { useState } from 'react'
import styles from './styles.module.css'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
	})

	const { destino, setDestino } = useState('')
	const { plano, setPlano } = useState('')

	function handleChange(evt) {
		const value = evt.target.value
		const key = evt.target.name
		setForm(old => ({
			...old,
			[key]: value,
		}))
	}

	function save(evt) {
		console.log(evt)
	}
	return (
		<div className="md: w-full bg-gray-500 max-h-screen h-screen">
			<div className="text-center pt-3">
				<p className="text-xl font-semibold">Inscrição escola de Profeta</p>
				<p className="text-base">Valor R$ 50,00</p>
				<p className="text-base">Pix para pagamentos CNPJ:</p>
			</div>
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
					<div className="flex justify-center  ">
						<button
							className="block px-12 py-4 font-bold bg-blue-400 w-full m-2 rounded-lg shadow-lg hover:shadow"
							onClick={save}
						>
							Cadastrar
						</button>
					</div>
					<pre>{JSON.stringify(form, null, 2)}</pre>
				</div>
			</div>
		</div>
	)
}

export default Index
