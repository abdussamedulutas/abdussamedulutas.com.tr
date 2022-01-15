import {store} from "./redux";
let INITIAL_STATE= {
    page: window.location.pathname,
    darkmode: false
};
export default function Reducer(state = INITIAL_STATE,{type,payload})
{
    switch(type)
    {
        case "darkmode":{
            return {
                ...state,
                darkmode: payload
            }
        }
        case "toggledarkmode":{
            return {
                ...state,
                darkmode: !state.darkmode
            }
        }
        case "ch/page":{
            return {
                ...state,
                page: payload
            }
        }
        default:{
            return state;
        }
    }
}