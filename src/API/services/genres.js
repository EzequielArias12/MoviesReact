import connect from '../axios';

const genresService = {
  getAll: () => connect.get('api/genres'),
}

export default genresService;