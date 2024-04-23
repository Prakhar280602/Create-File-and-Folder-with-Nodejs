 const fs = require("fs")
try {

    //create a file
    fs.writeFileSync("New File", "Hellooo dostooo")
    console.log("File created")
} catch (error) {
    console.log(error.message)
}


//to read file
// const fs = require("fs")
// try {
//     const data=fs.readFileSync("New File","utf8")
//     console.log(data)
// } catch (error) {
//     console.log(error.message)
// }

//for update in content

// try {
//     const data =fs.appendFileSync("New File"," Kaise hoo")
//     console.log("Update file")
// } catch (error) {
//     console.log("File update")
// }

//for delete a file

// try {
//     fs.unlinkSync("New file")
//     console.log("File Deleted")
// } catch (error) {
//     console.log(error.message)
// }

