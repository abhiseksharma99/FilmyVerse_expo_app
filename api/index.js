import axios from "axios";

const API_KEY = '46329088-11a8eb54a7877ffbc652ac33e';

const apiUrl = `https://pixabay.com/api/?key=${API_KEY}` ;


const formatUrl = (params) => {
    let url = apiUrl+'&per_page=25&safesearch=true&editors_choice=true';
    if(!params) return url;
    let paramKeys = Object.keys(params); 
    paramKeys.forEach(key => { 
        let value = key === 'q' ? encodeURIComponent(params[key]) : params[key];
        url += `&${key}=${value}`;
    });
    return url;
}


export const apiCall = async (params) => {
    try{
      const response = await axios.get(formatUrl(params));
      const {data} = response;
      return {success:true, data}
    }catch(err){
        console.log('got error', err.message);
        return {success: false, msg: err.message};
    }
}