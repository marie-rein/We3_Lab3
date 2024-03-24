const params = new URLSearchParams(window.location.search);
let id = params.get('id');
function App() {
    return <>
        <HeaderLoad />
        <BlogDetails idPublication={id}/>
        <CommentSection idPublication={id}/>
        <AfficherCommentaires idPublication={id}/>
        <FooterLoad />
    </>
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
//prevent refresh page
