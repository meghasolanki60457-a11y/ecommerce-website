function App(){
    return(
        <>
        <section className="py-5 bg-light">
  <div className="container text-center">
    
    <h2 className="mb-3">Subscribe to our Newsletter</h2>
    <p className="text-muted mb-4">
      Get the latest updates and offers directly in your inbox.
    </p>

    <div className="row justify-content-center">
      <div className="col-md-6">

        <div className="input-group">
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter your email"
          />
          <button className="btn btn-primary">
            Subscribe
          </button>
        </div>

      </div>
    </div>

  </div>
</section>
        </>
    );
}
export default App;