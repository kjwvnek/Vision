export function validateLength(text, from, to) {
  return text.length >= from && text.length <= to;
}

export function validatePhoneNumber(phoneNumber) {
  if (phoneNumber.length === 0) {
    return true;
  }
  
  const isNumber = !isNaN(parseInt(phoneNumber));
  
  
  return isNumber && phoneNumber.length < 12;
}

export function validateEmail(email) {
  const mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  return mailFormat.test(email.toLowerCase());
}

export function validateField(field) {
  return !!field.match(/^[a-zA-Z가-힣\-]+$/);
}
