// PLUGINS IMPORTS //
import React from "react"
import { useFormikContext } from "formik"
import { Typography} from "@material-ui/core"

// COMPONENTS IMPORTS //
// import ProductDetails from "./__NOTUSED-product-details"
import Respostas from "./respostas"
// import ShippingDetails from "./shipping-details"
// import PaymentDetails from "./payment-details"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Resultado = () => {
  const { values } = useFormikContext()

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Obrigado por Realizar o Questionario
      </Typography>
      <Respostas formValues={values}/>
      {/* <Grid container spacing={2}>
        <ShippingDetails formValues={values} />
        <PaymentDetails formValues={values} />
      </Grid> */}
    </>
  )
}

export default Resultado
