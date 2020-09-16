const addCustomScript = (src) => {
  const recaptchaScript = document.createElement('script');
  recaptchaScript.setAttribute('src', src);
  document.body.appendChild(recaptchaScript);
};

export { addCustomScript };
