// PLUGINS IMPORTS //
import React, { FC } from "react"
import {
 Radio,
 RadioGroup,
 FormControl,
 FormHelperText,
 FormLabel,
 FormControlLabel,
} from "@material-ui/core"
import { useField } from "formik"
import { at } from "lodash"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
 data: Array<{ value: string; label: string }>
 label: string
 name: string
 fullWidth?: boolean
}

const LikertField: FC<PropsType> = (props) => {
 const { label, data, ...rest } = props
 const [field, meta] = useField(props)
 const { value: selectedValue } = field
 const [touched, error] = at(meta, "touched", "error")
 const isError = touched && error && true

 function renderHelperText() {
  if (isError) {
   return <FormHelperText>{error}</FormHelperText>
  }
 }

 return (
  <FormControl {...rest} error={isError}>
   <FormLabel component="legend">{label}</FormLabel>
   <RadioGroup row aria-label="" name="row-radio-buttons-group "{...field} value={selectedValue ? selectedValue : ""}>
    {data.map(item => (
       <FormControlLabel control={<Radio />}value={item.value} label= {item.label} />
      )
     )
    }
   </RadioGroup>
   {renderHelperText()}
  </FormControl>
 )
}

export default LikertField
