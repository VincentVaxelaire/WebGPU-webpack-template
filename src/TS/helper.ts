export const CheckWebGPU = () => {
  let result = "Great, your current browser support WebGPU";
  if (!navigator.gpu) {
    result = "Your current broser doesn't support WebGPU yet! Make sure you are on a system with WebGPU enabled. Currently, SPIR-WebGPU is only supported in <a href=\"https://www.google.com/chrome/canary/\">Chrome Canary</a> with the flag \"enable-unsafe-webgpu\" enabled. See the <a href=\"https://github.com/gpuweb/gpuweb/wiki/implementation-status\">Implémentation Status</a> page for more details.";
  }
  return result;
}