import { connect } from 'react-redux';
import { AddToList }  from '../services/actions/action';
import { Add_To_list } from '../services/constants';

function fun() {
}
const mapStatToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    addtolisthandler: data => dispatch(AddToList(data))
})

export default connect(mapDispatchToProps, mapStatToProps)(fun)
//export default Form;