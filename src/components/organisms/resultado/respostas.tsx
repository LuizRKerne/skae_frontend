import React from "react"
import { Typography, Grid } from "@material-ui/core"
// import { useReviewOrderStyles } from "./styles"
import { useReviewStyles } from "./styles"

function Respostas(props) {
  const {
    formValues: { firstName, lastName, address1, address2, questao1, questao2, questao3 },
  } = props
  const styles = useReviewStyles()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom className={styles.title}>
          Informações de Contato
        </Typography>
        <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
        <Typography gutterBottom>{`${address1}`}</Typography>
        <Typography gutterBottom>{`${address2}`}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom className={styles.title}>
          Respostas
        </Typography>
        <Typography gutterBottom>{`${questao1}`}</Typography>
        <Typography gutterBottom>{`${questao2}`}</Typography>
        <Typography gutterBottom>{`${questao3}`}</Typography>
      </Grid>
    </Grid>
  )
}

export default Respostas
