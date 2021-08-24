import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import moviesService from '../API/services/movies';

const Create = () => {
  const [loading, setLoading] = useState();
  const history = useHistory();

  const submit = (data) => {
    setLoading(true);
    const createMovie = async () => {
      try {
        await moviesService.create(data);
        history.push("/");
      } catch (error) {
        setLoading(false)
        console.log(error);
      }
    };
    createMovie();
  };

  return (
    <div className="row d-flex justify-content-center">
      <h1 className="text-center m-5">Crear película</h1>
      <div className="col-12 col-lg-8 col-xl-7">
        <MovieForm submit={submit} loading={loading}/>
      </div>
    </div>
  );
};

export default Create;