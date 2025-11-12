const Content = ({ challenge, solution }) => (
  <section
    className="value-section fix section-padding section-bg pt-0"
    style={{ background: '#f6f3fe' }}
  >
    <div className="container px-3">
      <div className="row">
        <div className="col-12 mb-4">
          <h3 className="title mb-3">Challenge</h3>
          <p className="description">{challenge}</p>
        </div>
        <div className="col-12">
          <h3 className="title mb-3">Solution</h3>
          <p className="description mb-0">{solution}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Content;
