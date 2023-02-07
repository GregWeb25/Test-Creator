import {setAllTests} from "../store/tests/testsReducer";
import {setEnough} from "../store/results/resultsReducer";
import {AppDispatch} from "../store/appDispatch";

const parseData = (text: string, dispatch: AppDispatch) => {
    try {
        const data = JSON.parse(text);
        dispatch(setAllTests(data[0]));
        dispatch(setEnough(data[1]));
        return("");
    }
    catch (e) {
        return (`Data is wrong!`)
    }
}

export default parseData;