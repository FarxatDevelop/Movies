
function Card(props) {
  let { data } = props;
  return (
    data.map((item,index) => {
      return (
        <div className="card" key={index}>
          <img src={item.img} alt="" />
          <h4 className="name">{item.name}</h4>
          <p>{item.view}</p>
        </div>
      )
    })
  )
};
export default Card;