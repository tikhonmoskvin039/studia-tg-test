export const getSortedCharacters = (characters, sortOrder) => {
  const sortedCharacters = [...characters];

  if (sortOrder === "eye_color_yellow") {
    return sortedCharacters.filter((char) => char.eye_color === "yellow");
  } else if (sortOrder === "eye_color_blue") {
    return sortedCharacters.filter((char) => char.eye_color === "blue");
  } else if (sortOrder === "eye_color_brown") {
    return sortedCharacters.filter((char) => char.eye_color === "brown");
  } else if (sortOrder === "eye_color_red") {
    return sortedCharacters.filter((char) => char.eye_color === "red");
  } else if (sortOrder === "eye_color_blue-gray") {
    return sortedCharacters.filter((char) => char.eye_color === "blue-gray");
  }

  sortedCharacters.sort((a, b) => {
    const aLowerCaseName = a.name.toLowerCase();
    const bLowerCaseName = b.name.toLowerCase();

    const aMass = Number(a.mass);
    const bMass = Number(b.mass);

    const aHeight = Number(a.height);
    const bHeight = Number(b.height);

    if (sortOrder === "az") {
      return aLowerCaseName > bLowerCaseName
        ? 1
        : aLowerCaseName === bLowerCaseName
        ? 0
        : -1;
    } else if (sortOrder === "za") {
      return aLowerCaseName < bLowerCaseName
        ? 1
        : aLowerCaseName === bLowerCaseName
        ? 0
        : -1;
    } else if (sortOrder === "massLoHi") {
      return aMass > bMass ? 1 : aMass === bMass ? 0 : -1;
    } else if (sortOrder === "massHiLo") {
      return aMass < bMass ? 1 : aMass === bMass ? 0 : -1;
    } else if (sortOrder === "heightLoHi") {
      return aHeight > bHeight ? 1 : aHeight === bHeight ? 0 : -1;
    } else if (sortOrder === "heightHiLo") {
      return aHeight < bHeight ? 1 : aHeight === bHeight ? 0 : -1;
    }
    return sortedCharacters;
  });
  return sortedCharacters;
};
