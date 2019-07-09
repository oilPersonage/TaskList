import { connect } from 'react-redux';
import List from './list';

const mapStateToProps = ({ taskList, filters }) => {
  if (filters.field === 'all') {
    return { list: taskList.list };
  }
  return taskList;
};


export default connect(mapStateToProps)(List);
