import Column from './Column'
import classes from './Kanban.module.css'
const Kanban = (props) => {
  return (
    <div className={classes.kanban}>
      <Column title="Upcoming" />
      <Column title="In Progress" />
      <Column title="Completed" />
    </div>
  );
};

export default Kanban
