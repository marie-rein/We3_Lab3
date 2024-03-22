function App() {
    return <>
        <HeaderLoad />
        <Blog/>
        <FooterLoad />
    </>
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />);