export interface Medicamento {
    BLOQUEO: Date
    CADA: string
    CANTIDAD: string
    DESCRIPCION_VIA: string
    DURANTE: string
    ID_MED: string
    INDICACIONES: string
    MEDICAMENTO: string
    PRESENTACION: string
    TOMAR: string
    VIA: string
}

export interface FullMedicamento {
    id_medicamento: string
    id_convenio: number
    periodicidad: string
    tiempo: string
    dosis: string
    cantidad: string
    indicaciones: string
    id_via: string
    bloqueo: string
}