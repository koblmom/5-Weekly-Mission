import TimeAgo from "../../utils/time";
import useFetch from "../../hooks/fetchDataHook";
import "./CardData.css";

function CardData() {
  const [CardData] = useFetch("folder");

  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}.${month}.${day}`;
  };

  return (
    <div className="CardList">
      {CardData &&
        CardData.folder.links.map((link) => (
          <div key={link.id} className="CardContent">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <div className="CardImg">
                {link.imageSource ? (
                  <img
                    src={link.imageSource}
                    className="CardImg-items"
                    alt={link.title}
                  />
                ) : (
                  <img
                    src="images/card-default.png"
                    className="CardImg-items"
                    alt="이미지없음"
                  />
                )}
              </div>
              <div className="CardText">
                <p className="CardText-time">
                  {<TimeAgo createdAt={link.createdAt} />}
                </p>
                <p className="CardText-description">{link.description}</p>
                <div className="CardText-created-at">
                  {formatDateString(link.createdAt)}
                </div>
              </div>
            </a>
          </div>
        ))}
    </div>
  );
}
export default CardData;
