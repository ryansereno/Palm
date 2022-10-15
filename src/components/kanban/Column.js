import Card from './Card'
import classes from './Column.module.css'
const Column = (props) =>{
  return (
  <div className={classes.column}>
    <h2>{props.title}</h2>
    <Card />
    
    </div>
  )
}
export default Column
