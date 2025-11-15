import {format} from 'date-fns';

const getCurrentTime = () => {
     return format(new Date(), 'hh:mm:ss');
}

export default getCurrentTime;