import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useSelector } from "react-redux/es/exports";
import {TypedUseSelectorHook} from 'react-redux/es/types'

export const useAppDispatch : () => AppDispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector

// for the above 2 lines explanation and usecase refer pointsToKnow.txt 