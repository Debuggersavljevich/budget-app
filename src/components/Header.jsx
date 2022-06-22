import {useState} from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'
import IconoNuevoGasto from '../img/nuevo-gasto.svg'
import Modal from './Modal'

const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {

    const [modal, setModal] = useState(false)

    const [animarModal, setAnimarModal] = useState(false)

    const [gastos, setGastos] = useState([])


    const guardarGasto = (gasto) => {
        console.log(gasto)
    }

    const handleNuevoGasto = () => {
        setModal(true)

        setTimeout(() => {
            setAnimarModal(true)
        }, 100);
    }



  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValidPresupuesto ? (
            <ControlPresupuesto
            presupuesto={presupuesto}
            />
        ) : (
        <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        />
        )}
        
        {isValidPresupuesto && (
        <div className="nuevo-gasto">
            <img src={IconoNuevoGasto} alt="icono" onClick={handleNuevoGasto}/>
        </div>
        )}
        
        {modal && <Modal 
                    setModal={setModal} 
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal} 
                    guardarGasto={guardarGasto}
                    />} 
                    
            
    </header>
  )
}

export default Header