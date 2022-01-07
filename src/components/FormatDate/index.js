import React from 'react'

export default function FormatDate({date}) {
  function formatData(){
  

    let newDate = new Date(date);
    let day = newDate.getDay() + 1;
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${day.length > 1 ? day : '0' + day} / ${month} / ${year}`;
  }
  return (
    <span>{formatData(date)}</span>
  )
}
