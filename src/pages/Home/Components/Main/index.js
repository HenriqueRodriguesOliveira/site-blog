
//Hooks
import { useEffect, useState } from 'react';
//Api
import api from 'services/api';

const Main = ( {content}) => {

    const [user, setUser] = useState([])

    useEffect(() => {

      if(content){
          api.get('/user/' + content.id_user)
          .then((response) => {
             setUser(response.data);
          })
      }

    }, [])


    return(
     <>
                <div className="py-4 bb-black">
                    <h6 className="color-gray">{content.date}</h6>
                    <h6 className="uppercase color-primary">{content.category}</h6>

                    <h4>{content.title}</h4>
                    <p className="mt-1">
                        {content.resume}
                    </p>
                    <div className="mt-2 flex-space">
                    <div className="flex-start-row ">
                        <div className="profile">
                            <img src={user.ImageProfile} className="profile-img" alt="" />
                        </div>
                        <div className="ml-2">
                            <h6 className="color-primary">{user.name} {user.surname}</h6>
                            <h6 className="color-gray">{user.user}</h6>
                        </div>
                    </div>
                    </div>
                </div>
     </>
    );
}

export default Main;