import model from "./form-model"

const {
  formField: {
    firstName,
    lastName,
    address1,
    address2,
    city,
    zipcode,
    // country,
    // useAddressForPaymentDetails,
    // nameOnCard,
    // cardNumber,
    // expiryDate,
    // cvv,
    questao1,
    questao2,
    questao3,
  },
} = model

export default {
  [firstName.name]: "",
  [lastName.name]: "",
  [address1.name]: "",
  [address2.name]: "",
  [city.name]: "",
  [zipcode.name]: "",
  // [country.name]: "",
  // [useAddressForPaymentDetails.name]: false,
  // [nameOnCard.name]: "",
  // [cardNumber.name]: "",
  // [expiryDate.name]: "",
  // [cvv.name]: "",
  [questao1.name]: "",
  [questao2.name]: "",
  [questao3.name]: "",
}
