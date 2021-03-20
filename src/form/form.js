
import FormRow from './FormRow'

export default function Form(){
    const onRegister = () =>  {
        console.log()
    }
    return(
        <div>
            <h2>Registro</h2>
            <FormRow label={'Nombre'} type={'text'} />

            <FormRow label={'Apellidos'} type={'text'}/>

            <FormRow label={'Correo electrónico'} type={'email'} />

            <FormRow label={'Password'} type={'password'} />
            <FormRow label={'Confirmar Password'} type={'password'} />
            <button onClick={onRegister}>Registro</button>
        </div>
    )
}