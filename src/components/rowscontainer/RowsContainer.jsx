import React from "react";
import Row from "./Row";
import requestUrls from "../../constant/request";
const RowsContainer = () => {
  return (
    <div>
      <Row
        title={"NETFLIX ORGINALS "}
        fetchUrl={requestUrls.fetchNetflixOriginals}
        isLargeRow={{}}
      />
      <Row
        title={"Tranding Now "}
        fetchUrl={requestUrls.fetchTrending}
        isLargeRow={{}}
      />
      <Row
        title={"Top Rated "}
        fetchUrl={requestUrls.fetchTopRated}
        isLargeRow={{}}
      />
      <Row
        title={"Action Movies "}
        fetchUrl={requestUrls.fetchActionMovies}
        isLargeRow={{}}
      />
      <Row
        title={"Comedy Movies "}
        fetchUrl={requestUrls.fetchComedyMovies}
        isLargeRow={{}}
      />
      <Row
        title={"Horror Movies "}
        fetchUrl={requestUrls.fetchHorrorMovies}
        isLargeRow={{}}
      />
      <Row
        title={"Romance Movies "}
        fetchUrl={requestUrls.fetchRomanceMovies}
        isLargeRow={{}}
      />
      <Row
        title={"Documentaries"}
        fetchUrl={requestUrls.fetchDocumentaries}
        isLargeRow={{}}
      />
    </div>
  );
};

export default RowsContainer;
