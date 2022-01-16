import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { startSagaLoaduserAction } from '../../store/actions';
import { startSagaPayload } from '../..';

export const useUserFunctions=()=>{

    const dispatch = useDispatch();

    const startSagaLoadUser = useCallback((r: startSagaPayload)=>{
        dispatch(startSagaLoaduserAction(r))
    },[dispatch])

    return {startSagaLoadUser}
}