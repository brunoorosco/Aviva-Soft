var fs = require('fs');
var pdf = require('html-pdf-node');
const path = require('path');
let html = fs.readFileSync('./doc/template.html', 'utf8');


export default async(req, res) => {
    
    console.log(req)

    const bat = req.query.nome

    const options = {
        format: 'A5',
        landscape: true,
        path: 'Cert_'+bat+'.pdf',
        printBackground: true
       
    };

    // const image = path.join('file://', __dirname, 'template.png')
    // html = html.replace('{{image}}', image)



    html = html.replace('{{data}}', '31/10/2021')
    html = await html.replace('{{nome}}', bat)

    // let file = [{ url: "http://localhost:3000/template.html" }]
    let file = [{ content: html }]

    await pdf.generatePdfs(file, options)
        .then(pdfBuffer => {
           // console.log("PDF", pdfBuffer) // { filename: '/app/businesscard.pdf' }
        }).catch(error =>
            console.log(error));

    res.statusCode = 200;
    res.send("ok")

}