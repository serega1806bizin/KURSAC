/* eslint-disable react/prop-types */
import { Robota } from '../Robota/Robota'
import './List.scss'

 
export const MainList = ({ roboti }) => {
  return (
    <div className="main-list">
      {roboti.map((roboti) => (
        <Robota roboti={roboti} key={roboti.nomer}/>
      ))}
    </div>
  )
}