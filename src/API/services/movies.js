import connect from '../axios';

const newMovie = (data) => {
  const { title, rating, awards, release_date, length, genre_id } = data;
  return { title, rating, awards, release_date, length, genre_id: +genre_id };
};

const moviesService = {
  getAll: () => connect.get('api/movies'),
  getOne: (id) => connect.get(`api/movies/${id}`),
  create: (data) => connect.post('api/movies/create', newMovie(data)),
  update: (id, data) => connect.put(`api/movies/update/${id}`, newMovie(data)),
  remove: (id) => connect.delete(`api/movies/delete/${id}`),
};

export default moviesService;