// One Pet component here that's re-usable:
const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};
// Below we have created a component called App.
// The component in this case is a function that returns result of React.createElement
// That's all components are in React; components that return markup
// 3 paramenter that reactCreateElement gets: what tag is this?
// the attributes you want to pass it:
// finally it's children, as many as you want. Attributes are optional (if none; it has no attributes/ children)
// In order to pass attributes into the Pet component, we give the id :)
const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(
      Pet,
      {
        name: "Puzzle",
        animal: "Dog",
        breed: "lab-springer spaniel cross"
      },
      []
    ),
    React.createElement(
      Pet,
      {
        name: "Sally",
        animal: "Dog",
        breed: "New Zealand Sheepdog"
      },
      []
    ),
    React.createElement(
      Pet,
      {
        name: "Ruby",
        animal: "Dog",
        breed: "Whippet-collie cross"
      },
      []
    )
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
