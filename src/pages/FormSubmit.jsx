import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const FormSubmit = () => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        },5000)
    },[])

  return (
    <div>FormSubmited, you'll be redirected to the homepage shortly, thank you!</div>
  )
}

export default FormSubmit