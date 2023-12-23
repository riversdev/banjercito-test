export interface Empleado {
    Id: number
    GUID: string
    FechaCreacion: string
    FechaModificacion: string
    FechaEliminacion: string
    IdUsuario: number
    Eliminado: boolean

    Nombre: string
    Apellidos: string
    Edad: number
    Departamento: string
    TelefonoParticular: string
    TelefonoOficina: string
    Sexo: 'Masculino' | 'Femenino'
    EntidadFederativa: string
    NumEmpleado: string
    Rfc: string
}