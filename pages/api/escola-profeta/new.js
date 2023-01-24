const { GoogleSpreadsheet } = require('google-spreadsheet')
const credenciais = require('../../../credenciais.json')
const arquivo = require('../../../arquivo.json')
const crypto = require('node:crypto')

export default async(req, res) => {
    try {
        if (req.method === 'POST') {
            const doc = new GoogleSpreadsheet(arquivo.id)

            await doc.useServiceAccountAuth({
                client_email: credenciais.client_email,
                private_key: credenciais.private_key
            })

            await doc.loadInfo() //carrega as infos da planilha

            //select sheet escola-profeta-insc
            const sheet = await doc.sheetsByIndex[1]
            const response = await sheet.addRow({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                church: req.body.church,
                qrcode: crypto.randomUUID()
            })

            res.status(201).json({ name: response.name })
        }
    } catch (error) {
        res.status(500).send({ error: 'failed to fetch data' })
    }
}