const movie = name => {
  const favMovie = {
    Vassia: "The Hours",
    Dennis: "Joker",
    Trine: "Interstellar",
    Benjamin: "Cache",
    Nezar: "Casino"
  };
  if (!favMovie[name]) {
    return "Sorry, try another name!";
  }
  return favMovie[name];
};

export default movie;
