const path = require('path')
const fs = require('fs');
const archiver = require('archiver');
const express = require('express');

const app = express();
const port = 3000;

const srcFolderPath = path.join(__dirname, 'images');

function compressFilesAndDownload(srcFolder, options = { files: null, response: null }) {

    const archive = archiver('zip', {
        zlib: { level: 9 }
    });

    archive.on('error', err => {
        throw err
    });

    if (options.response) {
        options.response.attachment('archive.zip')
        archive.pipe(options.response)
    } else {
        console.log('An error has occured')
        return 
    }

    if (!options.files) {
        fs.readdirSync(srcFolder).forEach(item => {
            archive.append(fs.createReadStream(path.join(srcFolder, item)), { name: item })
        })
    } else {
        options.files.forEach(item => {
            archive.append(fs.createReadStream(path.join(srcFolder, item)), { name: item })
        })
    }

    archive.finalize();
}

app.use(express.static(path.join(__dirname, 'src')))

app.get('/getImgPath', (_, res) => {
    const files = []
    
    fs.readdirSync(srcFolderPath).forEach((item, i) => {
        files.push(path.join(srcFolderPath, item))
    })
    res.send(JSON.stringify(files))
})

app.get('/download', (_, res) => {
    compressFilesAndDownload(srcFolderPath, { response: res })
})

app.listen(port, () => {
    console.log('The server has been started');
})