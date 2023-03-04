import React from 'react'
import './Grupo.css'


const Grupos = ({group, group2, group3, group4, group5, group6, group7, group8, time, time2, time3, time4, time5, time6, time7, time8}) => {
  return (
    <div className='group'>
        <h1>Grupo 01</h1>
            {group.map((grupo, i) => (
                <span key={i} >{grupo}</span>
            ))}
            <h3>{time}</h3>
        <h1>Grupo 2</h1>    
                {group2.map((grupo2, i) => (
                    <span key={i}>{grupo2}</span>
                ))}
                <h3>{time2}</h3>
        <h1>Grupo 3</h1>
                {group3.map((grupo3, i) => (
                    <span key={i} > {grupo3}</span>
                ))}
                <h3>{time3}</h3>
        <h1>Grupo 4</h1>
                    {group4.map((grupo4, i ) => (
                        <span key={i} >{grupo4}</span>
                    ))}
                    <h3>{time4}</h3>
        <h1>Grupo 5</h1>
                        {group5.map((grupo5, i) => (
                            <span key={i} >{grupo5}</span>
                        ))}
                        <h3>{time5}</h3>
        <h1>Grupo 6</h1>
                        {group6.map((grupo6, i) => (
                            <span key={i} >{grupo6}</span>
                        ))}
                        <h3>{time6}</h3>
        <h1>Grupo 7</h1>
                        {group7.map((grupo7, i) => (
                            <span key={i} >{grupo7}</span>
                        ))}
                        <h3>{time7}</h3>
        <h1>Grupo 8</h1>
                        {group8.map((grupo8, i) => (
                            <span key={i} >{grupo8}</span>
                        ))}
                        <h3>{time8}</h3>
    </div>
  )
}

export default Grupos