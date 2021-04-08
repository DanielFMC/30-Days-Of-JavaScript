const date = new Date();
let year = date.getFullYear().toString();
let month = (date.getMonth() + 1).toString();
let day = date.getDate().toString();
let hour = date.getHours().toString();
let minute = date.getMinutes().toString();

hour.length == 1 && minute.length == 1
  ? console.log(`${year}-${month}-${day} 0${hour}:0${minute}`)
  : hour.length == 1
  ? console.log(`${year}-${month}-${day} 0${hour}:${minute}`)
  : minute.length == 1
  ? console.log(`${year}-${month}-${day} ${hour}:0${minute}`)
  : console.log(`${year}-${month}-${day} ${hour}:${minute}`);
