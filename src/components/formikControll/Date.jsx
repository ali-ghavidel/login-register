import React, { useEffect, useState } from 'react';
import { FastField } from 'formik';
import jmoment from 'moment-jalaali';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCheck } from '@fortawesome/free-solid-svg-icons';

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const months = [
    { id: 0, value: "فروردین" },
    { id: 1, value: "اردیبهشت" },
    { id: 2, value: "خرداد" },
    { id: 3, value: "تیر" },
    { id: 4, value: "مرداد" },
    { id: 5, value: "شهریور" },
    { id: 6, value: "مهر" },
    { id: 7, value: "آبان" },
    { id: 8, value: "آذر" },
    { id: 9, value: "دی" },
    { id: 10, value: "بهمن" },
    { id: 11, value: "اسفند" },
]

const Date = ({formik, name, label }) => {
    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [years, setYears] = useState([]);
    const [showPickers, setShowPickers] = useState(false);

    useEffect(() => {
        let now = jmoment();
        setDay(now.jDate());
        setMonth(now.jMonth());
        setYear(now.jYear());
    }, [])

    const handleShowDatePicker = ()=> {
        // console.log('here');
        setShowPickers(true);
        let arr = [];
        for(let i = year - 100; i <= year; i++){
            arr = [...arr, i]
        }
        setYears(arr);
    }
    const handleHideDatePicker = () => {
        setShowPickers(false);
        // console.log("formik:");
        // console.log(formik);
        formik.setValues((values)=>{
            return {...values,
            [name]: `${year} / ${Number(month)+1} / ${day}`
            }
        })
    }
    return (
        <div className="mb-3 date">

            <div className='formikDateInput' >
            
            <FastField type="text" className="form-control" id={name} name={name} disabled />
            {!showPickers ? <FontAwesomeIcon icon={faCalendar} onClick={handleShowDatePicker} color='white' className='formikDateInput_icon' /> : <FontAwesomeIcon icon={faCheck} className="text-success formikDateInput_icon" onClick={handleHideDatePicker} />}
            
            <label htmlFor={name} className="form-label">{label} </label>

            </div>
            
            
            {showPickers ? (
                <div className='datePicker row'>
                    <select className="form-select col mx-1" value={day} onChange={(e) => setDay(e.target.value)}>
                        {days.map((d) => {
                            return <option key={d} value={d}>{d}</option>
                        })}
                    </select>
                    <select className="form-select col mx-1" value={month} onChange={(e) => setMonth(e.target.value)}>
                        {months.map((m,key) => {
                            return <option key={m.id} value={m.id}>{m.value}</option>
                        })}
                    </select>
                    <select className="form-select col mx-1" value={year} onChange={(e) => setYear(e.target.value)}>
                        {years.map((y) => {
                            return <option key={y} value={y}>{y}</option>
                        })}
                    </select>
                    
                </div>
            ) : null}

        </div>
    );
}

export default Date;
