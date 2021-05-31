import './App.scss';
import BookList from './containers/BookList';
import BookForm from './containers/BookForm';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="container text-center">
        <BookForm />
        <BookList />
      </div>
    </>
  );
}

export default App;
