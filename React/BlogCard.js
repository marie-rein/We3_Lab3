function BlogCard(props) { 
    const { idPublication, titre, contenu } = props; 

    return (
        <div className='col-12 col-lg-4'>
            <a href={`blogPage.html?id=${idPublication}`} className='card p-3 border-secondary border-5 rounded-4 hover-zoom mx-auto'>
                <img src='../photos/blog.jpg' alt='blog image' height="200" width="280" />
                <div className="card-body">
                    <h5 className='card-title text-white'>{titre}</h5>
                    <p className='card-text'>{contenu}</p>
                </div>
            </a>
        </div>
    );
}
