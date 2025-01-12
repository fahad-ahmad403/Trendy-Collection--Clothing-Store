export const isRequired = (value) => value.trim().length > 0;

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidZip = (zip) => {
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zip);
};

export const isValidCardNumber = (cardNumber) => {
  const stripped = cardNumber.replace(/\s/g, '');
  const numberRegex = /^\d{16}$/;
  return numberRegex.test(stripped);
};

export const isValidExpiry = (expiry) => {
  const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
  if (!expiryRegex.test(expiry)) return false;

  const [month, year] = expiry.split('/');
  const expDate = new Date(2000 + parseInt(year), parseInt(month) - 1);
  const today = new Date();
  return expDate > today;
};

export const isValidCVV = (cvv) => {
  const cvvRegex = /^\d{3,4}$/;
  return cvvRegex.test(cvv);
};