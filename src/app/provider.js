'use client'
import { Provider } from 'react-redux'
import { store } from '@/store/index'

export default function RootProvider(props){
    return(
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}