const { GoogleSpreadsheet } = require('google-spreadsheet')
const crypto = require('node:crypto')

export default async(req, res) => {
    try {
        if (req.method === 'POST') {
            const doc = new GoogleSpreadsheet(process.env.GOOGLE_ID)

            await doc.useServiceAccountAuth({
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY
            })
            await doc.loadInfo() //carrega as infos da planilha
            console.log(req.body)
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