import moment from "moment";
import { useEffect, useState } from "react";

function GetCalendarNums({ date }) {
    let [ monthArray, setMonthArray] = useState([]);
    useEffect(() => {
        console.log(date);
        let startDate = moment(date).startOf('month').toString()
        let endDate = moment(date).endOf('month').toString()
      
        let inputMonthStartDay = startDate.split(" ")[0]; // 31
        let inputMonthEndDay = endDate.split(" ")[2]; // Sun
        
        function calPush(none_Array, time) {
            for (let i = 0; i < time; i++)
                none_Array.push(0)
            return none_Array
        }
    
        var none_Array = new Array()
        var array = new Array()
        
    
        for (let i = 1; i <= inputMonthEndDay; i++) {
            array.push(i)
        }
    
        if (inputMonthStartDay === 'Mon') {
            none_Array = calPush(none_Array, 1)
        } else if (inputMonthStartDay === 'Tue') {
            none_Array = calPush(none_Array, 2)
        } else if (inputMonthStartDay === 'Wed') {
            none_Array = calPush(none_Array, 3)
        } else if (inputMonthStartDay === 'Thu') {
            none_Array = calPush(none_Array, 4)
        } else if (inputMonthStartDay === 'FRi') {
            none_Array = calPush(none_Array, 5)
        } else if (inputMonthStartDay === 'Sat') {
            none_Array = calPush(none_Array, 6)
        }
        
        none_Array = none_Array.concat(array)
        console.log(none_Array)

        let tmp = []
    
        for (let i=0; i<none_Array.length; i+=7) {
            tmp.push( none_Array.slice(i, i+7) )
        }

        setMonthArray(tmp)
        
    }, [date])
    return (
        <table className="table" border={{ solid: 1 }}>
            <thead>
                <tr>
                    <th id = 'sun' style={{fontSize:'30px'}}>일</th>
                    <th id = 'mon' style={{fontSize:'30px'}}>월</th>
                    <th id = 'tue' style={{fontSize:'30px'}}>화</th>
                    <th id = 'wed' style={{fontSize:'30px'}}>수</th>
                    <th id = 'thu' style={{fontSize:'30px'}}>목</th>
                    <th id = 'fri' style={{fontSize:'30px'}}>금</th>
                    <th id = 'sat' style={{fontSize:'30px'}}>토</th>
                </tr>
            </thead>
            <tbody>
            {
                monthArray.map((week, w) => (
                    <tr key={w}>
                        {
                            week.map((day, d) => (
                                <td key={d}>{day || ""}</td>
                            ))   
                        }
                    </tr>
                ))            
            }
            </tbody>
        </table>
    )
}

export default GetCalendarNums
