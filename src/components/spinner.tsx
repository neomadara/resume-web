import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const Spinner: React.FC = () => (
    <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
        <Loader
            type="ThreeDots"
            color="#434E5E"
            height={150}
            width={150}
        />
    </div>
)

export default Spinner;