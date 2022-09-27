import axios from 'axios'

const apiInstance = axios.create({
  baseUrl: 'https://api.tvmaze.com',
  headers: { 'Content-Type': 'application/json' },
})

const baseUrl = 'https://api.tvmaze.com'

const endpoints = {
  getShows() {
    return apiInstance.get(`${baseUrl}/shows`)
  },
  getShowsByName(name = '') {
    return apiInstance.get(`${baseUrl}/search/shows?q=${name}`)
  },
  getShowDetails(id) {
    return apiInstance.get(`${baseUrl}/shows/${id}?embed[]=episodes&embed[]=cast`)
  },
  getEpisodeDetails(id) {
    return apiInstance.get(`${baseUrl}/episodes/${id}?embed=show`)
  },
  getCharacterDetails(id) {
    return apiInstance.get(`${baseUrl}/characters/${id}?embed=castcredits`)
  },
  getPersonDetails(id) {
    return apiInstance.get(`${baseUrl}/people/${id}`)
  },
  getCastCredits(id) {
    return apiInstance.get(`${baseUrl}/people/${id}/castcredits?embed=show`)
  },
}

export default endpoints
