import './ProfileDescription.css'

export const ProfileDescription = () => {

  const onDocumentMouseWheel = (event: WheelEvent) => {
    const card = document.getElementById('profileBase');
    if (card) {
      //check if card already has movement class
      if (!card.classList.contains('card-move-up') && !card.classList.contains('card-move-down')) {
        //if scroll down
        if (event.deltaY > 0) {
          card.classList.add('card-move-down');
        } else {
          card.classList.add('card-move-up');
        }
      }
    }
  }

  window.addEventListener('wheel', onDocumentMouseWheel);



  return (
    <div className="body">
      <div className="profileBase">
        <div className="profileDescription">
          <h1>Hi I'm Mario Munoz</h1>
          <p>
            I am an aspiring frontend web developer.
          </p>
        </div>
        <div className="profilePic">
          <img className='pic' src="src\images\placeholder_self.jpg" alt="profile" />
        </div>
      </div>
    </div>
  );
}