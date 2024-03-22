function Comment(props)
{
    const {contenu} = props;

    return(
        <div class="d-flex flex-start">
        <img class="rounded-circle shadow-1-strong me-3"
            src="../photos/iconcomment.png" alt="avatar" width="40"
            height="40" />
        <div class="flex-grow-1 flex-shrink-1">
            <div class="d-flex">
                <p class="small mb-0 align-items-end">
                    {contenu}
                </p>
            </div>
        </div>   
    </div>
    );
}