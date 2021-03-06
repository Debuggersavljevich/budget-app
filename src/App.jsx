import { useState, useEffect } from 'react'
import Header from './components/Header'
import NuevoPresupuesto from './components/NuevoPresupuesto'
import ControlPresupuesto from './components/ControlPresupuesto'
import ListadoGastos from './components/ListadoGastos'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import { generarId } from './helpers'



function App() {
  

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])

  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
     if(Object.keys(gastoEditar).length > 0){
      setModal(true)
      
      setTimeout(() => {
          setAnimarModal(true)
      }, 100);
     }
  }, [gastoEditar]);

  const handleNuevoGasto = () => {
      setModal(true)
      setHandleEditar({})
      setTimeout(() => {
          setAnimarModal(true)
      }, 100);
  }

  const guardarGasto = gasto => {
      gasto.id = generarId();
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
  
      setAnimarModal(false)
      setTimeout(() => {
          setModal(false)
      }, 500);
      
  }

  return (


    <div className={modal ? 'fijar' : ''}>
      <Header
      gastos={gastos}
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
      />

{isValidPresupuesto ? (
            <ControlPresupuesto
            presupuesto={presupuesto}
            gastos={gastos}
            />
        ) : (
        <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        />
        )}
        
        {isValidPresupuesto && (

        <>

            <main>
                <ListadoGastos
                    gastos={gastos}
                    setGastoEditar={setGastoEditar}
                />
            </main>
        
        
            <div className="nuevo-gasto">
        
                <img src={IconoNuevoGasto} alt="icono" onClick={handleNuevoGasto}/>
        
            </div>
        
        
        </>
        

        )}
        
        {modal && <Modal 
                    setModal={setModal} 
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal} 
                    guardarGasto={guardarGasto}
                    gastoEditar={gastoEditar}
                    />}
      
    </div>
  
  
  )
}

export default App
