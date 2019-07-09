import { connect } from 'react-redux';
import List from './list';

const mapStateToProps = ({ taskList, filters }) => {
  const { field, sorted } = filters;
  let list;
  if (field === 'completed') {
    list = taskList.list.filter(el => el.completed === true);
  } else if (field === 'noCompleted') {
    list = taskList.list.filter(el => el.completed === false);
  } else {
    list = taskList.list.filter(el => el.name.indexOf(field) > -1);
  }

  if (sorted) {
    list.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  return { list, sorted };
};


export default connect(mapStateToProps)(List);
