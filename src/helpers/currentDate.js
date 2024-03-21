const currentDate = new Date();
const yyyy = currentDate.getFullYear();
let mm = currentDate.getMonth() + 1; // January is 0
let dd = currentDate.getDate();
if (mm < 10) {
  mm = "0" + mm;
}
if (dd < 10) {
  dd = "0" + dd;
}
const newDate = yyyy + "-" + mm + "-" + dd;

export default newDate;
