import getCurrentDate from "./currentDate.mjs";
import getCurrentTime from "./currentTime.mjs";
import writeInFile from "./writeInFile.mjs";

writeInFile(getCurrentTime(), getCurrentDate());