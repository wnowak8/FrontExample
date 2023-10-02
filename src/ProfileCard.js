const ProfileCard = ({ title, handle, image }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
        <img src={image} alt="Profile image" />
        </figure>
      </div>

      <div className="card-content">
        <div>Tytuł: {title}</div>

        <div>Handle: {handle}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
