export const getNameInitials = (name) => {
  const splitName = (name || "").split(" ");
  const fisrtLetter = splitName[0] ? splitName[0].charAt(0).toUpperCase() : "";
  const letter = splitName[2] ? splitName[2] : splitName[1];
  const secondLetter = letter ? letter.charAt(0).toUpperCase() : "";
  return `${fisrtLetter}${secondLetter}`;
};
