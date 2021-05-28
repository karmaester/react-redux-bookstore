import './App.css';
import BookList from './containers/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="container text-center">
      <h1>React Redux Bookstore</h1>
      <BookForm />
      <BookList />
    </div>
  );
}

export default App;
