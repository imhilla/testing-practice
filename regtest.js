const regTest = (string) => {
  const regex = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>?]/g;
  return regex.test(string);
};

export default regTest;
