export default function dateFormatNew(date) {
  const dateParse = new Date(date);
  const dateFormated = dateParse.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return dateFormated;
}
