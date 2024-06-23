// hooks
import { useState, useEffect } from "react";

// components
import Coursel from "@components/Coursel";
import dummyData from "@assets/mockdata/indicesData";

const IndicesPanel = () => {
  const [time, setTime] = useState(new Date());
  const [domesticData, setDomesticData] = useState([]);
  const [foreignData, setForeignData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour12: true });
  };

  const formatDate = (time) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    };
    return time.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    setDomesticData(dummyData?.domesticIndexes);
    setForeignData(dummyData?.internationalIndexes);
  }, []);

  return (
    <div className="w-100 p-4 bg-blue">
      <div className="row">
        <div className="col-4 p-4">
          <div className="fs-6 fw-bolder text-center">{formatDate(time)}</div>
          <div className="fs-1 fw-bolder text-center">{formatTime(time)}</div>
        </div>
        <div className="col-8">
          <Coursel data={domesticData} cardsPerCoursel={3} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <span className="ms-1 mb-1">
            <h4>USA Indices</h4>
          </span>
          <Coursel data={foreignData} cardsPerCoursel={5} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <span className="ms-1 mb-1">
            <h4>Asian Indices</h4>
          </span>
          <Coursel data={foreignData} cardsPerCoursel={5} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <span className="ms-1 mb-1">
            <h4>European Indices</h4>
          </span>
          <Coursel data={foreignData} cardsPerCoursel={5} />
        </div>
      </div>
    </div>
  );
};

export default IndicesPanel;
