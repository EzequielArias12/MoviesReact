import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import moviesService from '../API/services/movies';
import MovieForm from '../components/MovieForm';


const Edit = () => {
  const { id } = useParams();
  const [ movie, setMovie ] = useState(null);
  const [ loading, setLoading] = useState();
  const history = useHistory();

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await moviesService.getOne(id);
      setMovie(data.data);
    };
    fetchMovie();
  }, [id])

  const submit = (data) => {
    setLoading(true);
    const createMovie = async () => {
      try {
        await moviesService.update(id, data);
        history.push('/');
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    createMovie();
  };

  return (
    <div className="row d-flex justify-content-center">
      <h1 className="text-center m-5">Editar película</h1>
      <div className="col-12 col-lg-8 col-xl-7">
        {
          movie ? (
            <MovieForm movie={movie} submit={submit} loading={loading}/>
          ) : null
        }   
      </div>
    </div>
  );
};

export default Edit;
