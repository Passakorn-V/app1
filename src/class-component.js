import React from 'react'

export default class Calendar extends React.Component{
    getDate(){
        const dayNames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        const monthNames=['January','February','March','April','May','June','July','August','September','October','November','December']
        const date = new Date()
        const weekDay = dayNames[date.getDay()]
        const day = date.getDay()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear()
        return `${weekDay} ${day} ${month} ${year}`
    }
    render() {
        return <p><center>{this.getDate()}</center></p>
    }
}