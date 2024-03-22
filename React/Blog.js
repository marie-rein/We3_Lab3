function Blog()
{
    return (
    
        <>
        <OtherHtmlCode/>
        <BlogList/>
        </>

    );
  
}

function OtherHtmlCode(){
    return (
        <div class="container mb-5">
    <div class="row">
        <form class="d-flex flex-column flex-lg-row align-items-center"> 
            <div class="col-12 col-lg-6 d-flex align-items-center"> 
                <input class="form-control me-2 border-dark" type="search" placeholder="Rechercher" aria-label="Search"></input>
                <button class="btn btn-primary" type="submit">Rechercher</button>
            </div>

            <div class="col-12 col-lg-5 d-flex align-items-center mt-3 mt-lg-0"> 
                <label class="me-2 mb-0">Trier par:</label> 
                <select class="form-select border-dark">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>   
            </div>
        </form>
    </div>
</div>

    
    );
}