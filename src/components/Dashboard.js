import {useState, useEffect, Fragment} from 'react'
import { useStateValue } from '../helpers/StateProvider'


const Dashboard = () =>  {
    const { user } = useStateValue()
    return (
       <div className="main-container">
           
       </div>
    )
}

export default Dashboard
