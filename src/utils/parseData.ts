import {setAllTests} from "../store/tests/testsReducer";
import {setEnough} from "../store/results/resultsReducer";
import {AppDispatch} from "../store/appDispatch";

const parseData = async (dispatch: AppDispatch) => {
    try {
        const text = await navigator.clipboard.readText()
        const data = JSON.parse(text);
        dispatch(setAllTests(data[0]));
        dispatch(setEnough(data[1]));
        return("Data read successfully.");
    }
    catch (e) {
        return (`Data is wrong!`)
    }
}

export default parseData;