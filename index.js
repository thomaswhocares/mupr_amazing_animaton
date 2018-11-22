// For more comments about what's going on here, check out the `hello_world`
// example.
import('./mupr_animation')
  .then(mupr_animation => mupr_animation.draw())
  .catch(console.error);
