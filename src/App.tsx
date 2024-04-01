import { ExpenseChart } from "./components";
import { data } from "../data/data";

const App: React.FC = () => {
    return (
        <>
            <ExpenseChart balance={921.48} expenses={data} />
        </>
    );
};

export default App;
