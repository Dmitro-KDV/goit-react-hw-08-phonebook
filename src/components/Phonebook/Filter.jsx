import { setFilter } from "components/redux/tasks/slice";
import { getFilter } from "components/redux/tasks/selector";
import { useDispatch, useSelector } from "react-redux";

export const Filter = () => {
    const filter = useSelector(getFilter)
    const dispatch = useDispatch();

    const handleChange = ({ target: {value} }) => {
        dispatch(setFilter(value));
    };
    
    return ( 
        <>
        <h4>Find contacts by name</h4>
        <input
            type="text"
            name="filter"
            onChange={handleChange}
            value={filter}
        />
        </>
    );
}