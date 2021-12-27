// PLUGINS IMPORTS //
import { makeStyles } from "@material-ui/core/styles"

export const useAppStyles = makeStyles((theme) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
    maxWidth: 1200
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  wrapper: {
    margin: theme.spacing(4),
    position:"relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
}))
