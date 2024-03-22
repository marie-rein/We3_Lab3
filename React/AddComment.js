function CommentSection({ idPublication }) {
    const [commentaire, setCommentaire] = React.useState('');

    const handleChange = (event) => {
        setCommentaire(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (commentaire.trim() === '') {
            alert('Veuillez entrer un commentaire.');
            return;
        }
        
        const imgUrl = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp";
        const dateComment = new Date().toISOString().slice(0, 10);
        
        const commentData = {
            contenu: commentaire,
            datePublication: dateComment,
            idPublication: idPublication
        };
        
        fetch("http://localhost:3000/commentaire", {
            method: "POST",
            body: JSON.stringify(commentData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => {
            $("#dialog-confirm-text").show();
            $( "#dialog-confirm" ).dialog({
                resizable: false,
                height: "auto",
                width: 400,
                modal: true,
                buttons: {
                    "Ajouter le commentaire": function() {                  
                        $( this ).dialog( "close" );
                    },
                    Cancel: function() {
                        $( this ).dialog( "close" );
                    }
                }
            });
        })
        
        .catch(err => {
            console.error('Error submitting comment:', err);
            alert('Une erreur est survenue lors de l\'ajout du commentaire. Veuillez réessayer.');
        });
    };

    return (
        <div className="container mb-5">
            <div className="row">
                <h3>Commentaires</h3>
                <textarea rows="5" cols="30" value={commentaire} onChange={handleChange} className="mt-4" />
            </div>
            <div id="dialog-confirm" title="Ajouter un commentaire">
                <p id="dialog-confirm-text" style={{ display: 'none' }}>
                    <span className="ui-icon ui-icon-alert" style={{ float: 'left', margin: '12px 12px 20px 0' }}></span>
                    Voulez-vous vraiment ajouter ce commentaire ?
                </p>
            </div>
            <button type="button" className="envoyer btn btn-primary btn-lg" onClick={handleSubmit}>Envoyer</button>
        </div>
    );
}
