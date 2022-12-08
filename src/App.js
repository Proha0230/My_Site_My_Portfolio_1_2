import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Main } from "./Components/Main";
import { MyLink } from "./Components/MyLink";
import { MyStack } from "./Components/MyStack";

function App () {
    return (
        <>
        <Header />
        <MyStack />
        <MyLink/>
        <Main />
        <Footer />
        </>
    );
}

export default App;
