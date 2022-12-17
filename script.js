function validCard(cardNumber) {
  const numberString = cardNumber.toString();
  const numberLength = numberString.length;

  let sum1 = 0;
  let sum2 = 0;
  let total = 0;

  for (let i = numberLength - 2; i >= 0; i -= 2) {
    let tempNumber = Number(numberString[i]) * 2;
    if (tempNumber >= 10) {
      tempNumber = tempNumber - 10;
      tempNumber = tempNumber + 1;
    }

    sum1 += tempNumber;
  }

  for (let j = numberLength - 1; j >= 0; j -= 2) {
    sum2 += Number(numberString[j]);
  }

  total = sum1 + sum2;

  console.log(numberString);
  console.log(numberLength);
  console.log(sum1);
  console.log(sum2);
  console.log(total);

  let result = total % 10 == 0 ? true : false;
  console.log(result);
  return result;
}

validCard(1234567890123456);
validCard(4408041234567893);
validCard(38520000023237);
validCard(4222222222222); 