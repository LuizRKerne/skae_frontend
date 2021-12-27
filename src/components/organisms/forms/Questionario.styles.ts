// PLUGINS IMPORTS //
import { makeStyles } from "@material-ui/core/styles"

export const useAppStylesQuestionario = makeStyles((theme) => ({
  stepper: {
    padding: theme.spacing(0, 0, 1),
    maxWidth:1200,
  },
  label: {
    padding: theme.spacing(0, 0, 2),
  },
  description:{
    padding: theme.spacing(0, 0, 2), 
  }

}))
