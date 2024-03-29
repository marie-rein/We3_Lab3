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
        <div>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <img src="../photos/cepipic.jpg" id="imageBlog" alt="Blog" />
            </div>
        </div>

        <br />

        <div className="container">
            <div className="row">
                <div className="col">
                    <p id="title">{details.titre}</p>
                    <p className="contenu">{details.contenu}</p>
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                <img src="../photos/caption.jpg" id="caption" alt="caption" />
            </div>

            <div className="row">
                <div className="col">
                    <p className="text-center" id="auteur">{details.auteur}</p>
                    <p className="text-center mb-4">{details.datePublication}</p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <p id="contenu2" >{details.contenu}</p>
                    <p id="contenu3" >{details.contenu}</p>
                </div>
            </div>
        </div>
    </div>
    );
}
