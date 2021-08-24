import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import usersService from '../../API/services/user';
import validations from '../../validations/registerValidations';
import Button from '../Button';
import Input from '../Input';
import Message from '../Message';

const Login = (
    {
        className,
        setToken
    }
) => {
    const [ loading, setLoading ] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ errorServer, setErrorServer ] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        const loginUser = async () => {
            try {
                const response = await usersService.login(data);
                if (response.data.status === 200) {
                    window.localStorage.setItem("_Token", response.data.token);
                    setToken(response.data.token)
                }  
            } catch (error) {
                setLoading(false);
                if(error){
                    setErrorServer(true)
                }
            }
        };
        loginUser();
    } 


    return ( 
        <div className={`container p-4 d-flex justify-content-center ${className}`}>
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-body rounded">
                <div className="col-12 col-md-9">
                    <h3 className="text-center pb-3">Logueate</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Message
                        show={errorServer}
                        setShow={setErrorServer}
                        message="Credenciales inválidas"
                        variant="danger"
                        time="5000"
                    />
                    <form action="" onSubmit={handleSubmit(onSubmit)} >
                        <Input 
                            className="col-12"
                            name="email"
                            type="email"
                            placeholder="Email" 
                            register={register}
                            validation={validations.email}
                            error={errors.email}
                        />
                          <Input
                            className="col-12"
                            name="pass"
                            type="password"
                            placeholder="Contraseña"
                            register={register}
                            validation={validations.pass}
                            error={errors.pass}
                        />
                        <Button type="submit" text="ENVIAR" loading={loading}/>
                    </form>
                </div>                
            </div>
        </div>
     );
}
 
export default Login;