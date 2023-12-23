import { useEffect, useState } from 'react'
import { getCustomMedicamentos, getMedicamentos } from '@/helpers'
import { medicamentosDB } from '@/data'
import { FullMedicamento } from '@/interfaces'
import './App.css'

export const App = () => {
  const [medicamentos, setMedicamentos] = useState<FullMedicamento[]>([])
  const [customMedicamentos, setCustomMedicamentos] = useState<FullMedicamento[]>([])

  useEffect(() => {
    //medicamentos
    const medicamentos = getMedicamentos(medicamentosDB.map(x => ({ data: { ...x } })))

    if (medicamentos) setMedicamentos(medicamentos)

    // custom medicamentos
    setCustomMedicamentos(getCustomMedicamentos(medicamentosDB))
  }, [])

  console.log({
    medicamentos,
    customMedicamentos,
  })

  return (
    <div className="container">
      <h1>Banjercito Test</h1>
      <h3>Medicamentos</h3>
      <table className="table">
        <thead>
          <tr>
            <th>id_medicamento</th>
            <th>id_convenio</th>
            <th>periodicidad</th>
            <th>tiempo</th>
            <th>dosis</th>
            <th>cantidad</th>
            <th>indicaciones</th>
            <th>id_via</th>
            <th>bloqueo</th>
          </tr>
        </thead>
        <tbody>
          {
            customMedicamentos.map((med, i) => (
              <tr key={i}>
                <td>{med.id_medicamento}</td>
                <td>{med.id_convenio}</td>
                <td>{med.periodicidad}</td>
                <td>{med.tiempo}</td>
                <td>{med.dosis}</td>
                <td>{med.cantidad}</td>
                <td>{med.indicaciones}</td>
                <td>{med.id_via}</td>
                <td>{med.bloqueo}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}