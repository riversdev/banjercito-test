import { utilitiesC } from '@/helpers'
import { ApiResponse, FullMedicamento } from '@/interfaces'

export const getMedicamentos = (dataMedi: ApiResponse[]): FullMedicamento[] | false => {
    const stMedi: FullMedicamento[] = []

    if (dataMedi.length > 0) {
        for (var i = 0; i < dataMedi.length; i++) {
            if (dataMedi[i].data['VIA'] == '' || dataMedi[i].data['VIA'] == ' ') {
                utilitiesC.message(`La via seleccionada para el medicamento "${dataMedi[i].data['MEDICAMENTO']}" no es valida, para poder guardar seleccione una opción del catálogo`, 'ERROR')
                return false
            }

            var reg: FullMedicamento = {
                id_medicamento: dataMedi[i].data['ID_MED'],
                id_convenio: 1,
                periodicidad: dataMedi[i].data['CADA'],
                tiempo: dataMedi[i].data['DURANTE'],
                dosis: dataMedi[i].data['TOMAR'],
                cantidad: dataMedi[i].data['CANTIDAD'],
                indicaciones: dataMedi[i].data['INDICACIONES'],
                id_via: dataMedi[i].data['VIA'],
                bloqueo: dataMedi[i].data['BLOQUEO'].toLocaleDateString()
            }

            stMedi.push(reg)
        }
    }

    return stMedi
}