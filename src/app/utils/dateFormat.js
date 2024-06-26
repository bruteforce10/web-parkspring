import { format, parseISO } from "date-fns";

const dateFormat = (date) => {
  const dateParse = parseISO(date);
  const dateFormated = format(dateParse, "MMMM dd, yyyy");
  return dateFormated;
};

export default dateFormat;
