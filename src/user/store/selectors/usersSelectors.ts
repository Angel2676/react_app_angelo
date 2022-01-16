import { createSelector } from "reselect";
import { userState }  from "../../";
import { useSelector } from "react-redux";

const usersState = (state:{userState : userState}) => state.userState;
const storeusersSelector = createSelector(usersState, slice=>slice.users);
const loadingSelector = createSelector(usersState, slice=>slice.loading);

export const useStoreUsers=()=>{
    const storeusers = useSelector(storeusersSelector);
    return {storeusers}
}

export const useUsersAreLoading = () =>{
    const loading = useSelector(loadingSelector);
    return  { loading }
}