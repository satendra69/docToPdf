// const libre = require('libreoffice-convert');
// const path = require('path');
// const fs = require('fs');
// console.log("mandeep");

// async function ConvertDocToPdf() {
//     try {
//         const inputPath = path.join(__dirname, ".././Satendra.doc");
//         const outputPath = path.join(__dirname, ".././Satendra.pdf");
//         let docData = await fs.readFile(inputPath)
//         return new Promise((resolve, reject) => {
//             libre.convert(docData, '.pdf', undefined, (err, done) => {
//                 if (err) {
//                     reject('Conversion Failed')
//                 }
//                 fs.writeFileSync(outputPath, done);
//                 resolve("Convertion successfull")
//             });
//         })
//     } catch (err) {
//         console.log("Error in input reading", err);
//     }
// }

// Importing the jimp module
const Jimp= require("jimp");

//We will first read the JPG image using read() method.
Jimp.read("./img/Satendra_Pic.jpg", function (err, image) {
//If there is an error in reading the image,
//we will print the error in our terminal
if (err) {
	console.log(err)
}
//Otherwise we convert the image into PNG format
//and save it inside images folder using write() method.
else {
    console.log("Images jpg to png convert succesfully");
	image.write("./img/Satendra_Pic.png")
}
})
