import React from 'react';

function Gender({ list, residence }) {

    //성별 값 
    var maleCount = 0;
    var femaleCount = 0;

    {
        list && list.map((item) => {
            if (item.gender == 'Male') {
                maleCount = maleCount + 1
            } else if (item.gender == 'Female') {
                femaleCount = femaleCount + 1
            }
        })
    };

    return (
        <>
            <label id='genderBox'>
                <div style={{border: '5px dashed #14e337'}}>
                    <th style={{ color: 'blue'}}>남자 수: {maleCount} 명</th><br />
                    <th style={{ color: 'red'}}>여자 수: {femaleCount} 명</th><br />
                </div>
                {/* { JSON.stringify(res_residence)} */}

            </label>
        </>
    );
}

export default Gender;