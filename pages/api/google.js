const { GoogleSpreadsheet } = require('google-spreadsheet')

export default async(req, res) => {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_ID)

    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY
    })

    await doc.loadInfo() //carrega as infos da planilha
    console.log(doc.title)

    const sheet = doc.sheetsByIndex[0] // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

    const rows = await sheet.getRows({}) // can pass in { limit, offset }

    const batizando = rows.map(({ Nomes, data, CEM }) => {
        return {
            Nomes,
            data,
            CEM
        }
    })

    console.log(batizando)
    res.statusCode = 200
    res.json(batizando)
}