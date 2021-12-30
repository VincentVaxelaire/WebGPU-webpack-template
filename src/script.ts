import './style.css'
import { CheckWebGPU } from './TS/helper'

// Check if browser is WebGPU compatible
const compatible = document.getElementById('is_WebGPU_Compatible') as HTMLElement
compatible.innerHTML = CheckWebGPU()