import ListaDeNotas from "./components/ListaDeNotas"


function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="título"></input>
        <textarea placeholder="escreva a sua nota"></textarea>
        <button>criar nota</button>
      </form>
    <ListaDeNotas></ListaDeNotas>
    </section>
  );
}

export default App;
