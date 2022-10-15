const { GoogleSpreadsheet } = require('google-spreadsheet')
const credenciais = require('../../credenciais.json')
const arquivo = require('../../arquivo.json')

export default async (req, res) => {
    const doc = new GoogleSpreadsheet(arquivo.id)

    await doc.useServiceAccountAuth({
        client_email: credenciais.client_email,
        private_key: credenciais.private_key
    })


    await doc.loadInfo() //carrega as infos da planilha
    console.log(doc.title)

    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

    const rows = await sheet.getRows({}); // can pass in { limit, offset }

    const batizando = rows.map(({ Nomes, data, CEM }) => {
        return {
            Nomes,
            data, CEM
        }
    })

    console.log(batizando)
    res.statusCode = 200;
    res.json(
        batizando
    )
}