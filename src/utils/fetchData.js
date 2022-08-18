export const baseURL = 'https://exercisedb.p.rapidapi.com'

const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
  }
}

const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
  }
}

export const fetchData = async (url) => {
  const response = await fetch(url, exerciseOptions)
  const data = await response.json()
  return data
}

export const fetchDataYoutube = async (url) => {
  const response = await fetch(url, youtubeOptions)
  const data = await response.json()
  return data
}
