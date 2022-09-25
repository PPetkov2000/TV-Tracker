import axios from 'axios'

const apiInstance = axios.create({
  baseUrl: 'https://api.tvmaze.com',
  headers: { 'Content-Type': 'application/json' },
})

const endpoints = {
  getShows(name = '') {
    return apiInstance.get(`/search/shows?q=${name}`)
  },
  getShowDetails(id) {
    return apiInstance.get(`/shows/${id}?embed[]=episodes&embed[]=cast`)
  },
  getEpisodeDetails(id) {
    return apiInstance.get(`/episodes/${id}?embed=show`)
  },
  getCharacterDetails(id) {
    return apiInstance.get(`/characters/${id}?embed=castcredits`)
  },
  getPersonDetails(id) {
    return apiInstance.get(`/people/${id}`)
  },
  getCastCredits(id) {
    return apiInstance.get(`/people/${id}/castcredits?embed=show`)
  },
}

export default endpoints
