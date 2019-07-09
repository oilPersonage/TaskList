import { connect } from 'react-redux';
import List from './list';

const mapStateToProps = ({ taskList, filters }) => {
  const { field, sorted } = filters;
  let list;
  switch (field) {
    case 'completed':
      list = taskList.list.filter(el => el.completed === true);
      return;
    case 'noCompleted':
      list = taskList.list.filter(el => el.completed === false);
      return;
    default:
      list = [...taskList.list];
  }

  if (sorted) {
    console.log(list.sort((a, b) => (a.name > b.name ? -1 : 1)));
    // list.sort((a, b) => console.log(a, b));
    // console.log(sorted, list)
  }

  return { list, sorted };
};


export default connect(mapStateToProps)(List);
