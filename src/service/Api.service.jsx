const baseUrl = 'https://youtube-v31.p.rapidapi.com'
import axios from "axios"

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '66fb3889ecmsh56cd811ea0beab4p19aaf6jsn0d0bc433ba4f',
    'X-RapidAPI-Host': "youtube-v31.p.rapidapi.com"
  }
}

export const Api_Service = {
  async fetching(url) {
    const response = await axios.get(`${baseUrl}/${url}`, options)
    return response.data
  }
}
