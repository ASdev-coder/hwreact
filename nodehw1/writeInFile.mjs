import fs from "fs";

const writeInFile = (time, date) => {
    fs.appendFile("data.txt", `${time}, ${date}\n`, () => {});
    console.log(`${time}, ${date}`);
}

export default writeInFile;