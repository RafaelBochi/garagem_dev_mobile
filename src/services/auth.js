import axios from 'axios';

export default class AuthService {
  async postUserToken(token) {
    const response = await axios.get('/api/usuarios/me/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
}