export const capitalizeCity = (country) => {
  return country
    .replaceAll("-", " ")
    .split("")
    .map((char, index, arr) => {
      if (arr[index - 1] === " " || index === 0) return char.toUpperCase();
      return char;
    })
    .join("");
};
