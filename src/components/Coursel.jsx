import { Carousel, Card } from "react-bootstrap";

function groupObjects(array, groupSize) {
  return array.reduce((acc, obj, index) => {
    const groupIndex = Math.floor(index / groupSize);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    };
    acc[groupIndex].push(obj);
    return acc;
  }, []);
}

const Coursel = ({ data, cardsPerCoursel }) => {
  return (
    <Carousel interval={3000} pause={false} indicators={false} controls={false}>
      {groupObjects(data, cardsPerCoursel)?.map((item) => {
        return (
          <Carousel.Item>
            <div className="d-flex justify-content-around">
              {item?.map((element) => {
                return (
                  <Card style={{ width: "200px" }}>
                    <Card.Body>
                      <Card.Title>{element?.name}</Card.Title>
                      <Card.Text
                        className={`${
                          element?.prevDayChangePercent.includes("-")
                            ? "text-danger"
                            : "text-success"
                        }`}
                      >
                        <span>{element?.currentPrice}</span>
                        <span className="ms-4">{element?.prevDayChange}</span>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer
                      className={`${
                        element?.prevDayChangePercent.includes("-")
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {element?.prevDayChangePercent}{" "}
                      {!element?.prevDayChangePercent?.includes("-") ? (
                        <i class="ri-arrow-up-double-line"></i>
                      ) : (
                        <i class="ri-arrow-down-double-line"></i>
                      )}
                    </Card.Footer>
                  </Card>
                );
              })}
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Coursel;