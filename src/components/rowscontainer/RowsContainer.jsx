import React from "react";
import Row from "./Row";
import requestUrls from "../../constant/request";
const RowsContainer = () => {
  return (
    <div>
      <Row
        title={"NETFLIX ORGINALS "}
        fetchUrl={requestUrls.fetchNetflixOriginals}
      />
      <Row title={"Tranding Now "} fetchUrl={requestUrls.fetchTrending} />
      <Row title={"Top Rated "} fetchUrl={requestUrls.fetchTopRated} />
      <Row title={"Action Movies "} fetchUrl={requestUrls.fetchActionMovies} />
      <Row title={"Comedy Movies "} fetchUrl={requestUrls.fetchComedyMovies} />
      <Row title={"Horror Movies "} fetchUrl={requestUrls.fetchHorrorMovies} />
      <Row
        title={"Romance Movies "}
        fetchUrl={requestUrls.fetchRomanceMovies}
      />
      <Row title={"Documentaries"} fetchUrl={requestUrls.fetchDocumentaries} />
    </div>
  );
};

export default RowsContainer;
