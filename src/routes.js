import teas from './components/Teas';
import homepage from './components/HomePage';
import leavepage from './components/Leave';

export default [
  { path: '/', component: homepage },
  { path: '/teas', component: teas },
  { path: '/leave', component: leavepage }
]