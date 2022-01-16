import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { startSagaCoinListAction } from '../../store/actions';
import { CoinsAllParams } from '../..';


export const useCoinFunctions =()=>{

    const dispatch = useDispatch();

    const startSagaLoadCoins = useCallback((r: CoinsAllParams | undefined)=>{
        dispatch(startSagaCoinListAction(r))
    },[dispatch])

    return {startSagaLoadCoins}; 
}