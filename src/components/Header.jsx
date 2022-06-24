import {useState} from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'
import ListadoGastos from './ListadoGastos'
import IconoNuevoGasto from '../img/nuevo-gasto.svg'
import Modal from './Modal'
import { generarId } from '../helpers'



const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {

    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)
    const [gastos, setGastos] = useState([])


    

    const handleNuevoGasto = () => {
        setModal(true)

        setTimeout(() => {
            setAnimarModal(true)
        }, 100);
    }

    const guardarGasto = gasto => {
        gasto.id = generarId();
        setGastos([...gastos, gasto])
    
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
        
    }

  return (
    <header>
        
        <h1>Planificador de Gastos</h1>
        

        
                    
            
    </header>
  )
}

export default Header