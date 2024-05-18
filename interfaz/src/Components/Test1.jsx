import {React, useState, useEffect} from 'react'
import { getMaterial } from '../api/intendenciaApi'

const Test1 = () => {
  const [material, setMaterial] = useState(null)

  useEffect(() => {
    const x = getMaterial();
    setMaterial(x);
  }, [])
  
  console.log(material)
    
  return (
    <div>Test1</div>
  )
}

export default Test1