import './styles.css'

export const PostCard = ({title, cover, body, id}) => {

  return (
    
    <div className="post-container">
      <img src={cover} alt={title} />
      <div className="post" >
        <h2>{title} {id}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
