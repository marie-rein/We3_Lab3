function App() {
    return <>
        <HeaderLoad />
        <OtherHtmlCode />
        <BlogList/>
        <FooterLoad />
    </>
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />);