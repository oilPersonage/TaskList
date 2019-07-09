import { connect } from 'react-redux';
import List from './list';

const mapStateToProps = ({ taskList, filters }) => {
  switch (filters.field) {
    case 'completed':
      return { list: taskList.list.filter(el => el.completed === true) };
    case 'noCompleted':
      return { list: taskList.list.filter(el => el.completed === false) };
    default:
      return { list: taskList.list };
  }
  return taskList;
};


export default connect(mapStateToProps)(List);
