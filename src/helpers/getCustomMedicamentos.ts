import { FullMedicamento, Medicamento } from '@/interfaces'

export const getCustomMedicamentos = (dataMedi: Medicamento[]): FullMedicamento[] =>
    dataMedi.reduce((acc: FullMedicamento[], curr) => {
        if (curr.VIA === '' || curr.VIA === ' ') throw new Error(`La via seleccionada para el medicamento "${curr.MEDICAMENTO}" no es valida, para poder guardar seleccione una opción del catálogo`)

        if (curr.VIA === '2' || curr.VIA === '5' || Number(curr.VIA) > 10) console.log(curr.MEDICAMENTO)

        return [
            ...acc,
            {
                id_medicamento: curr.ID_MED,
                id_convenio: 1,
                periodicidad: curr.CADA,
                tiempo: curr.DURANTE,
                dosis: curr.TOMAR,
                cantidad: curr.CANTIDAD,
                indicaciones: curr.INDICACIONES,
                id_via: curr.VIA,
                bloqueo: curr.BLOQUEO.toLocaleDateString()
            }
        ]
    }, [])