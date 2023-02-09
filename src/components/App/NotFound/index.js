import './styles.scss';

function NotFound() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bootstrap 5 404 Error Page</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      </head>
      <body>
        <div className="d-flex align-items-center justify-content-center vh-100, notFound_body">
          <div className="text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3"> <span className="text-danger">Ooops!</span> Page non trouvée.</p>
            <p className="lead">
              La page que vous recherchez ne semble pas exister.
            </p>
            <a href="/" className="btn btn-primary">Accueil</a>
          </div>
        </div>
      </body>
    </>
  )
};

export default NotFound;