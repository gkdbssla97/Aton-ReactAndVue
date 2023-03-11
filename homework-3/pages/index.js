import { useState } from "react"
import moment from 'moment'
import InputDate from "./inputDate";
import React, { useEffect } from 'react'
import GetCalendarNums from "./calendarNum";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./button";

export default function Home() {
  const [list, setList] = useState([]);

  const [inputDate, setInputDate] = useState("")
  const [inputDateValue, setInputDateValue] = useState(moment().format("YYYY-MM-DD"))

  function doRefreshTable() {
    setInputDateValue(inputDate.substring(0, 4) + "-" + inputDate.substring(5, 7) + "-01")
  }

  return (
    <>
      <div>
        <h3>연 / 월 을 입력해주세요. (ex: 2023/03)</h3>
        <label>입력: </label>
        <input
          type="text"
          required
          value={inputDate}
          onChange={e => setInputDate(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              doRefreshTable()
            }
          }}
        />

        <div primary onClick={ () => {
          doRefreshTable()
        }}>제출</div>
      </div>

      <div className='w-screen h-screen bg-sky-200'>
        <GetCalendarNums date={inputDateValue}  />
      </div>
    </>

  )
}
