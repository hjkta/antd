const pluralIndex = (value: any, f1: string, f2: string, f5: string) => {
  const mod100 = Math.abs(value) % 100;
  const mod10 = mod100 % 10;

  return mod100 > 10 && mod100 < 20
    ? f5
    : mod10 === 1
    ? f1
    : mod10 > 1 && mod10 < 5
    ? f2
    : f5;
};

export default pluralIndex;
