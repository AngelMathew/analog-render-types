import { getData } from '../../services/data.service';
export const load = async () => {
const content$=await getData();
return content$;
};


