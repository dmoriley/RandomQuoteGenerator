// service to generate random new color;
export default(() => {
  const letters = '0123456789ABCDEF';

  const get = () => {
    let newColour = '#'
    for (let i = 0; i < 6; i++ ) {
        newColour += letters[Math.floor(Math.random() * 16)];
    }
    return newColour;
  };
  return Object.freeze({get});
})();