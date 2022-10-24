// prettifies the date from the database
export const getNiceDate = (date: Date) => {
  // "MonthAsText, day, year"
  const dateObject = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  // @ts-ignore
  return dateObject.toLocaleDateString("en-US", options);
};

// shortens diary entries and conditionally appends ellipses
export const getPreview = (string: string) => {
  const length = string.length;
  if (length >= 100) {
    return string.substring(0, 100) + "...";
  } else {
    return string;
  }
};
