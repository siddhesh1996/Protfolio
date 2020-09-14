import { lazy } from 'react';

export const HomeMenu = lazy(()=> import(/* webpackChunkName: 'Home' */'../screens/Home'));