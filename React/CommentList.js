
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

