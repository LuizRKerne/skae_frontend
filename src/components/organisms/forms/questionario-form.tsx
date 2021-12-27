import React, { FC } from "react"
import { FormikValues } from "formik"
import {
 Box,
 Stepper,
 Step,
 StepLabel,
 StepContent,
 Button,
 Paper,
 Typography,
 Grid,
} from "@material-ui/core"
import { useAppStylesQuestionario } from "./Questionario.styles"
import LikertField from "components/atoms/form-fields/likert-field"

interface PropsType {
 formField: FormikValues
}

const QuestionarioForm: FC<PropsType> = (props) => {
 const styles = useAppStylesQuestionario()

 const {
  formField: {
   questao1,
   questao2,
   questao3,
  },
 } = props

 const [activeStepQuestionario, setActiveStepQuestionario] = React.useState(0);

 const handleNext = () => {
  setActiveStepQuestionario((prevActiveStep) => prevActiveStep + 1);
 };

 const handleBack = () => {
  setActiveStepQuestionario((prevActiveStep) => prevActiveStep - 1);
 };

 const handleReset = () => {
  setActiveStepQuestionario(0);
 };
 const steps = [
  {
   name: questao1.name,
   label: questao1.label,
   description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
   name: questao2.name,
   label: questao2.label,
   description:
    'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
   name: questao3.name,
   label: questao3.label,
   description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
//   name: questao3.name,
//   label: questao3.label,
//   description: `Try out different ad text to see what brings in the most customers,
//              and learn how to enhance your ads using features like ad extensions.
//              If you run into any problems with your ads, find out how to tell if
//              they're running and how to resolve approval issues.`,
//  },
]
//  name: questao4.name,
//  label: questao4.label,
//  description: `Try out different ad text to see what brings in the most customers,
//             and learn how to enhance your ads using features like ad extensions.
//             If you run into any problems with your ads, find out how to tell if
//             they're running and how to resolve approval issues.`,
// },
// name: questao5.name,
// label: questao5.label,
// description: `Try out different ad text to see what brings in the most customers,
//            and learn how to enhance your ads using features like ad extensions.
//            If you run into any problems with your ads, find out how to tell if
//            they're running and how to resolve approval issues.`,
// },
// name: questao6.name,
// label: questao6.label,
// description: `Try out different ad text to see what brings in the most customers,
//            and learn how to enhance your ads using features like ad extensions.
//            If you run into any problems with your ads, find out how to tell if
//            they're running and how to resolve approval issues.`,
// },
// name: questao7.name,
// label: questao7.label,
// description: `Try out different ad text to see what brings in the most customers,
//            and learn how to enhance your ads using features like ad extensions.
//            If you run into any problems with your ads, find out how to tell if
//            they're running and how to resolve approval issues.`,
// },
// name: questao8.name,
// label: questao8.label,
// description: `Try out different ad text to see what brings in the most customers,
//            and learn how to enhance your ads using features like ad extensions.
//            If you run into any problems with your ads, find out how to tell if
//            they're running and how to resolve approval issues.`,
// },
// name: questao9.name,
// label: questao9.label,
// description: `Try out different ad text to see what brings in the most customers,
//            and learn how to enhance your ads using features like ad extensions.
//            If you run into any problems with your ads, find out how to tell if
//            they're running and how to resolve approval issues.`,
// },
// name: questao10.name,
// label: questao10.label,
// description: `Try out different ad text to see what brings in the most customers,
//            and learn how to enhance your ads using features like ad extensions.
//            If you run into any problems with your ads, find out how to tell if
//            they're running and how to resolve approval issues.`,
// },
//  ];


 return (
  <Box sx={{ maxWidth: 1200 }}>
    <Stepper alternativeLabel activeStep={activeStepQuestionario} connector="" className={styles.stepper} orientation="vertical">
    {steps.map((step, index) => (
     <Step key={step.label}>
      <StepLabel className={styles.label} StepIconComponent="">
       {step.label}
      </StepLabel>
      <StepContent>
       <Typography>{step.description}</Typography>
       <Grid container spacing={1}>
        <Grid item xl={12}>
         <LikertField
          name={step.name}
          label={step.label}
          data={respostasLikert}
         />
        </Grid>
        <Grid item xs={12} sm={8}>
         <Button
          variant="contained"
          onClick={handleNext}
         >
          {index === steps.length - 1 ? 'Terminar' : 'Proxima'}
         </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
         <Button
          disabled={index === 0}
          onClick={handleBack}
         >
          Voltar
         </Button>
        </Grid>
       </Grid>
      </StepContent>
     </Step>
    ))}
   </Stepper>



   {activeStepQuestionario === steps.length && (
    <Paper square elevation={0} sx={{ p: 3 }}>
     <Typography>Você chegou ao fim do questionario</Typography>
     <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
      Limpar
     </Button>
    </Paper>
   )}
  </Box>
 );
}



const respostasLikert = [
 {
  value: "1",
  label: "Discordo Fortemente",
 },
 {
  value: "2",
  label: "Discordo",
 },
 {
  value: "3",
  label: "Neutro",
 },
 {
  value: "4",
  label: "Concordo",
 },
 {
  value: "5",
  label: "Concordo Fortemente",
 },
]



export default QuestionarioForm