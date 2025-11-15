const uaMonths = [
  'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
  'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
];

const now = new Date();

const day = now.getDate().toString();
const month = uaMonths[now.getMonth()];
const year = now.getFullYear().toString();

const getCurrentDate = () => {
    return `${day} ${month} ${year}р`;
}

export default getCurrentDate;