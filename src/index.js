import React from 'react'
import { createRoot } from 'react-dom/client'

// import App from './01-组件的定义方式/01-组件的定义方式'
// import App from './01-组件的定义方式/02-render返回值'

// import App from './02-组件的生命周期/App'

// import App from './03-组件间的通信/01-组件的嵌套'
// import App from './03-组件间的通信/02-父传子通信-类组件'
// import App from './03-组件间的通信/03-父传子通信-函数组件'
// import App from './03-组件间的通信/04-父传子通信-属性验证'
// import App from './03-组件间的通信/05-子传父通信-函数传递'

// import App from './04-组件通信案例/App'

// import App from './05-slot/App'

// import App from './06-跨组件通信/01-跨组件通信-props'
// import App from './06-跨组件通信/02-跨组件通信-context'
// import App from './06-跨组件通信/03-跨组件通信-context-函数'
import App from './06-跨组件通信/04-跨组件通信-多个context-函数'

createRoot(document.getElementById('root')).render(<App />)
