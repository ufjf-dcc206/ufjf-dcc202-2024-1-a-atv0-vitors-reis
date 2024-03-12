import './style.css'
import { setupCounter, setupRootAppContent } from './counter.js'

document.querySelector('#app').innerHTML = setupRootAppContent();

setupCounter(document.querySelector('#counter'))
