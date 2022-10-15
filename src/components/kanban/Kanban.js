import Column from './Column'
import classes from './Kanban.module.css'
const Kanban = (props) => {
  return (
    <div className={classes.kanban}>
      <Column />
      <Column />
      <Column />
    </div>
  );
};

export default Kanban
