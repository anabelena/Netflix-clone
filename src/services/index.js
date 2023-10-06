const NETFLIX_KEY= import.meta.env.VITE_NETFLIX_API_KEY;

function setUrl(query,offset=0,limit_titles=50,limit_sugestions=20){
    return `https://netflix-data.p.rapidapi.com/search/?query=${query}&offset=${offset}&limit_titles=${limit_titles}&limit_suggestions=${limit_sugestions}`
}

export async function searchInNetflix(search){

const response = await fetch(setUrl(search),{
    headers:{
        'X-RapidAPI-Key': NETFLIX_KEY,
        'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
    }
})

const data = response.json();
return data;

}
