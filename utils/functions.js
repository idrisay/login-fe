export const isValidEmail = (email) => {
  // E-posta adresi geçerli mi kontrol ediliyor
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const isValidPassword = (password) => {
  // Şifrenin minimum 8 karakter uzunluğunda, büyük/küçük harf, özel karakter ve sayı içermesi gerekiyor
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
  return passwordRegex.test(password);
}

