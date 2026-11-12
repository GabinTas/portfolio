function calculAge(birthday) {
  const currentDate = new Date();
  const DOB = new Date(birthday);

  let year = currentDate.getFullYear() - DOB.getFullYear();
  const m = currentDate.getMonth() - DOB.getMonth();

  if (m < 0 || (m === 0 && currentDate.getDate() < DOB.getDate())) {
    year--;
  }

  return year;
}

console.log(calculAge("2004-03-31"));
