function BlogDetails({ idPublication }) {
    const [details, setDetails] = React.useState({});

    React.useEffect(() => {
        fetch(`http://localhost:3000/publication/` + idPublication)
            .then(response => {
                return response.json();
            })
            .then(publication => {
                setDetails(publication);
            })
            .catch(error => console.log('error : ', error));
    }, [idPublication]);

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <img src="../photos/cepipic.jpg" id="imageBlog" alt="Blog" />
            </div>

            <br />
            <p id="title">{details.titre}</p>
            <br /><br />

            <p className="contenu">{details.contenu}</p>

            <div className="d-flex justify-content-center">
                <img src="../photos/caption.jpg" height="140" alt="caption" />
            </div>

            <p className="d-flex justify-content-center mb-4" id="auteur">{details.auteur} <br/> {details.datePublication}</p>

            <p id="contenu2">{details.contenu}</p>

            <p id="contenu3">{details.contenu}</p>

        </div>
    );
}
