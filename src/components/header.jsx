import React from 'react';


function Header(){
    return(
        <div className='main'>
            <div className='header'>
                <div className="icon">
                <iconify-icon icon="icon-park-solid:certificate" width="55" height="55"></iconify-icon>
                  <h2 className='topic'>CERTIFICATE AUTOMATION</h2>
                  </div>
                  <div>
                  <a href="">Check validity</a>
                  <a href="">Log out</a>
                  </div>
            </div>
        </div>
    );
}

export default Header;