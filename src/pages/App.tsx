// PLUGINS IMPORTS //
import React, { useState } from "react"
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  CircularProgress,
} from "@material-ui/core"
import { Formik, Form, FormikValues, FormikHelpers } from "formik"

// COMPONENTS IMPORTS //
import { Wrapper } from "components/layout"
import { ContactForm, QuestionarioForm } from "components/organisms/forms"
import Resultado from "components/organisms/resultado"
// import ReviewOrder from "components/organisms/_NOTUSED-review-order"

// EXTRA IMPORTS //
import { useAppStyles } from "./App.styles"
import initialValues from "utils/initial-values"
import formModel from "utils/form-model"
import validationSchema from "utils/validation-schema"
import CheckoutSuccess from "components/organisms/forms/checkout-success"

/////////////////////////////////////////////////////////////////////////////

const { formField } = formModel
const renderStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <ContactForm formField={formField}/>
    case 1:
      return <QuestionarioForm formField={formField} />
    case 2:
      return <Resultado />
  }
}

const steps = ["Login", "Questionario", "Agradecimentos"]
const App = () => {
  const [activeStep, setActiveStep] = useState(0)
  const selectedValidationSchema = validationSchema[activeStep]
  const isLast = activeStep === steps.length - 1
  const styles = useAppStyles()

  const sleep = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  const submitForm = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    await sleep(1000)
    alert(JSON.stringify(values, null, 2))
    actions.setSubmitting(false)
    setActiveStep((prev) => prev + 1)
  }

  const handleSubmit = (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    if (isLast) {
      submitForm(values, actions)
    } else {
      setActiveStep((prev) => prev + 1)
      actions.setTouched({})
      actions.setSubmitting(false)
    }
  }

  return (
    <Wrapper>
      <Typography component="h1" variant="h4" align="center">
        Questionario Skae
      </Typography>
      <Stepper alternativeLabel activeStep={activeStep} connector="" className={styles.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent="" >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <CheckoutSuccess />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={selectedValidationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps) => (
            <Form>
              {renderStepContent(activeStep)}

              <div className={styles.buttons}>
                {activeStep === 0 && (
                  <Button
                    onClick={() => setActiveStep((prev) => prev - 1)}
                    className={styles.button}
                  >
                    Voltar
                  </Button>
                )}

                <div className={styles.wrapper}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={styles.button}
                    disabled={formikProps.isSubmitting}
                  >
                    {isLast ? "Finalizar" : "Proximo"}
                  </Button>
                  {formikProps.isSubmitting && <CircularProgress />}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </Wrapper>
  )
}

export default App
