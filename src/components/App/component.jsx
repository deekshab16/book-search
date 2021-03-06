import Form from "../Form";
import HomeScreen from "../HomeScreen";
import CardShowcase from "../CardShowcase";
import Loading from "../Loading";
import "./style.css";

const App = (props) => {
  const { data } = props;
  const { visibleHomeScreen, isLoading } = data;
  return (
    <div className="Wrapper">
      <h1>Book Search App </h1>

      {/* Search component */}
      <Form {...props} />

      <div className="clear" />
      {/* Display info screen for the first time */}
      {visibleHomeScreen ? (
        <HomeScreen />
      ) : isLoading ? (
        <Loading />
      ) : (
        <CardShowcase {...props} />
      )}
    </div>
  );
};

export default App;
