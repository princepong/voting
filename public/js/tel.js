let telephone = "(852) 1234-5678";

function maskTelephone(telephone) {
  console.log(
    telephone.slice(1, 4) +
      "-" +
      telephone.slice(6, 10) +
      telephone.slice(11, 16)
  );
}
maskTelephone(telephone);
