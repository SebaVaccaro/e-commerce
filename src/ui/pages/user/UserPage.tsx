import "./user-page.css"
import { useUserStore } from "../../../state/user/useUserStore"
import { useState } from "react"
import { useChangePassword } from "../../../hooks/user/useChangePassword"

type FormState = {
    basicData: boolean,
    facturationData: boolean,
    addressData: boolean,
    accessData: boolean
}

export const UserPage = () => {
    const user = useUserStore()
    const userData = user.user
    const [formState, setFormState] = useState<FormState>({
        basicData: true,
        facturationData: false,
        addressData: false,
        accessData: false
    })
    
    const funSetFormState = (name:
        "basicData" |
        "facturationData" |
        "addressData" |
        "accessData") => {
            const newForm = { ...formState, [name]: !formState[name] }
            setFormState(newForm)
        }
        
    
    const {response, setData} = useChangePassword()
    const [newPassword, setNewPassword] = useState<string | null>(null)

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setNewPassword(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(!user.user)return
        if(!newPassword)return
        setData({password: newPassword, _id: user.user._id})
    }

    return (
        userData ? (
            <div className="user-page">
                <div className="user-page-header">
                    <span className="user-page-title">Mi Cuenta</span>
                    <div className="user-page-info">
                        <svg className="user-page-info-svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="currentColor" />
                        </svg>
                        <span>Desde aquí podrás modificar los datos de tu cuenta.</span>
                    </div>
                </div>

                <div className="user-page-form">
                    <span className="user-page-form-title" onClick={() => funSetFormState("basicData")}>Datos básicos</span>
                    {formState.basicData && (
                        <>
                            <div className="user-page-form-body">
                                <span className="user-page-form-span">{"Nombre (*)"}</span>
                                <input className="user-page-form-input" type="text" />
                            </div>
                            <div className="user-page-form-body">
                                <span className="user-page-form-span">{"Apellido (*)"}</span>
                                <input className="user-page-form-input" type="text" />
                            </div>
                            <div className="user-page-form-body">
                                <span className="user-page-form-span">{"Teléfono (*)"}</span>
                                <input className="user-page-form-input" type="text" />
                            </div>
                            <div className="user-page-form-body">
                                <span className="user-page-form-span">{"Documento de identidad (*)"}</span>
                                <input className="user-page-form-input" type="text" />
                            </div>
                            <div className="user-page-button">
                                <span>{"(*) campos requeridos"}</span>
                                <button>Modificar Datos</button>
                            </div>
                        </>
                    )}
                </div>

                <div className="user-page-form">
                    <span className="user-page-form-title" onClick={() => funSetFormState("facturationData")}>Datos de Facturación</span>
                    {
                        formState.facturationData && (
                            <>
                                <div className="user-page-form-body">
                                    <span className="user-page-form-span">Razón</span>
                                    <input className="user-page-form-input" type="text" />
                                </div>
                                <div className="user-page-form-body">
                                    <span className="user-page-form-span">RUT</span>
                                    <input className="user-page-form-input" type="text" />
                                </div>
                                <div className="user-page-button">
                                    <span>{"(*) campos requeridos"}</span>
                                    <button>Modificar Datos</button>
                                </div>
                            </>
                        )
                    }

                </div>

                <div className="user-page-form">
                    <span className="user-page-form-title" onClick={() => funSetFormState("addressData")}>Direcciones</span>
                    {formState.addressData && (

                        <div className="user-page-form">
                            <div className="user-page-form-body">
                                <span className="user-page-form-span">{"Lugar (*)"}</span>
                                <input className="user-page-form-input" type="text" placeholder="Ej: Casa, Oficina, Otros..." />
                            </div>
                            <div className="user-page-form-body">
                                <span className="user-page-form-span">{"Calle (*)"}</span>
                                <input className="user-page-form-input" type="text" />
                            </div>
                            <div className="user-page-form-body">
                                <span className="user-page-form-span">{"Número de Puerta (*)"}</span>
                                <input className="user-page-form-input" type="text" />
                            </div>
                            <div className="user-page-form-body">
                                <span className="user-page-form-span">{"Esquina (*)"}</span>
                                <input className="user-page-form-input" type="text" />
                            </div>
                            <div className="user-page-form-body">
                                <span className="user-page-form-span">{"Departamento (*)"}</span>
                                <input className="user-page-form-input" type="text" />
                            </div>
                            <div className="user-page-form-body">
                                <span className="user-page-form-span">{"Ciudad / Zona (*)"}</span>
                                <input className="user-page-form-input" type="text" />
                            </div>
                            <div className="user-page-form-body">
                                <span className="user-page-form-span">{"Teléfono (*)"}</span>
                                <input className="user-page-form-input" type="text" />
                            </div>
                            <div className="user-page-button">
                                <span>{"(*) campos requeridos"}</span>
                                <button>Modificar Dirección</button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="user-page-form">
                    <span className="user-page-form-title" onClick={() => funSetFormState("accessData")}>Datos de acceso</span>
                    {formState.accessData && (<>
                        <div className="user-page-info">
                            <svg className="user-page-info-svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="currentColor" />
                            </svg>
                            <div className="user-page-info-spans">
                                <span>- Ingresa la Nueva Contraseña.</span>
                                <span>- Ingresa la Repetición de la Nueva Contraseña..</span>
                            </div>
                        </div>
                        <div className="user-page-form-body">
                            <span className="user-page-form-span">{"Nueva Contraseña (*)"}</span>
                            <input onChange={handelChange} className="user-page-form-input" type="text" />
                        </div>
                        <div className="user-page-form-body">
                            <span className="user-page-form-span">{"Repetir Nueva Contraseña (*)"}</span>
                            <input className="user-page-form-input" type="text" />
                        </div>
                        <div className="user-page-info">
                            <svg className="user-page-info-svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="currentColor" />
                            </svg>
                            <div className="user-page-info-spans">
                                <span>- Tu email</span>
                                <span>- Modifica esta información únicamente si deseas cambiar tu Contraseña.</span>
                            </div>
                        </div>
                        <form className="user-page-button" onSubmit={handleSubmit}>
                            <span>{"(*) campos requeridos"}</span>
                            <button>Modificar Contraseña</button>
                        </form>
                        {
                            response && (<span>{response}</span>)
                        }
                    </>)}
                </div>
            </div>
        ) : (
            <div>
                <span>Primero logeate.</span>
            </div>
        )
    )
}
