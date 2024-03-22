

function AfficherCommentaires({ idPublication }) {

    const [commentaires, setCommentaires] = React.useState([]);

    React.useEffect(() => {
        
        fetch(`http://localhost:3000/commentaire?idPublication=${idPublication}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement des commentaires');
                }
                return response.json();
            })
            .then(data => setCommentaires(data))
            .catch(error => console.error('Erreur:', error));
    }, [idPublication]);  

    return (
        
            <div class="container mt-5 mb-5">
                <div class="row mx-auto" id="lescommentaires">      
                {commentaires.map(commentaire => (
                <Comment contenu={commentaire.contenu} key={commentaire.id}/>
            ))}
            </div>
            </div>
     
    );
}

{/* <div key={commentaire.id} className="d-flex flex-start">
                    <img className="rounded-circle shadow-1-strong me-3"
                        src="../photos/iconcomment.png" alt="avatar" width="40"
                        height="40" />
                    <div className="flex-grow-1 flex-shrink-1">
                        <div className="d-flex">
                            <p className="small mb-0 align-items-end">
                                {commentaire.contenu}
                            </p>
                        </div>
                    </div>   
                </div> */}
