import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import Input from '../Input';
import Button from '../Button';
import Select from '../Select';
import validations from '../../validations/movieValidations';
import genresService from '../../API/services/genres';


const MovieForm = ( {
  movie,
  submit,
  loading
} ) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ genres, setGenres ] = useState([]);

  useEffect(() => {
   const fetchGenres = async () => {
     const { data } = await genresService.getAll();
     setGenres(data.data);
   };
   fetchGenres();
  }, []);


  return (
    <form className="row" onSubmit={handleSubmit(submit)}>
      <Input
        className="col-12 col-sm-6"
        name="title"
        label="Título"
        placeholder="Ej. Harry Potter..."
        type="text"
        register={register}
        validation={validations.title}
        error={errors.title}
        defaultValue={movie ? movie.title : null}
      />
      <Input
        className="col-12 col-sm-6"
        name="rating"
        label="Rating"
        placeholder="Ej. 8"
        type="number"
        register={register}
        validation={validations.rating}
        error={errors.rating}
        defaultValue={movie ? movie.rating : null}
      />
      <Input
        className="col-12 col-sm-6"
        name="awards"
        label="Premios"
        placeholder="Ej. 2"
        type="number"
        register={register}
        validation={validations.awards}
        error={errors.awards}
        defaultValue={movie ? movie.awards : null}
      />
      <Input
        className="col-12 col-sm-6"
        name="release_date"
        label="Fecha de estreno"
        type="date"
        register={register}
        validation={validations.release_date}
        error={errors.release_date}
        defaultValue={
          movie ? format(new Date(movie.release_date), 'yyyy-MM-dd') : null
        }
      />
      <Input
        className="col-12 col-sm-6"
        name="length"
        label="Duración"
        placeholder="Ej. 120"
        type="text"
        register={register}
        validation={validations.length}
        error={errors.length}
        defaultValue={movie ? movie.length : null}
      />
      {
        genres.length ? (
          <Select
          className="col-12 col-sm-6"
          name="genre_id"
          label="Género"
          placeholder="Selecciona un género"
          type="text"
          register={register}
          validation={validations.genre_id}
          error={errors.genre_id}
          options={genres}
          defaultValue={movie ? movie.genre_id : null}
        />
        ) : null }
      <Button type="submit" loading={loading}/>
    </form>
  );
};

export default MovieForm;
