import Data from './data/scp.json';

function Catalog() {
        return (
          <div className="container bg-secondary">
              <div className="row">
                  {Data.map(
                      (scp, index) => {
                      return <div key={index} className="col-11 ms-5 p-3">
                                <div className="card">
                                <img src={scp.image} className="card-img-top p-1" alt="scp image"/>
                                    <hr />
                                    <div className="card-body p-2">
                                        <h5 className="card-title">Item: {scp.item}</h5>
                                        <p className="card-text">Objectclass: {scp.objectclass}</p>
                                        <hr />
                                        <p className='card-text'>Desription: {scp.description}</p>
                                        <hr />
                                        <p className='card-text'>Containment: {scp.containment}</p>
                                        <hr />
                                        <p className='card-text'>References: {scp.referances}</p>
                                        <hr />
                                        <p className='card-text'>Additional Notes: {scp.misc}</p>
                                    </div>
                                </div>
                            </div>
                      }
                  )}
              </div>
          </div>
        );
}

export default Catalog;