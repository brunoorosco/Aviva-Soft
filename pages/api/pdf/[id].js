var fs = require('fs');
var pdf = require('html-pdf-node');
const path = require('path');
var html = fs.readFileSync('./doc/template.html', 'utf8');


export default async (req, res) => {
    try {


        console.log(req.query)

        const nomeBatizando = req.query.nome
        const dataBatismo = req.query.data


        const options = {
            format: 'A5',
            landscape: true,
            path: 'Cert_' + nomeBatizando + '.pdf',
            printBackground: true

        };

        // const image = path.join('file://', __dirname, 'template.png')
        // html = html.replace('{{image}}', image)



        html = html.replace('{{data}}', dataBatismo)
        html = await html.replace('{{nome}}', nomeBatizando)

        // let file = [{ url: "http://localhost:3000/template.html" }]
        let file = [{ content: html }]

        await pdf.generatePdfs(file, options,)
            .then(pdfBuffer => {


            }).catch(error =>
                console.log(error));



        return res.status(200).json({ 'Certificado': nomeBatizando })

    } catch (error) {
        res.status(500).send({ error: 'failed to fetch data' })
    }



}