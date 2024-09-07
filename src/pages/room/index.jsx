import React from 'react'
import { useParams } from 'react-router'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
const Roompage = () => {
   const { roomid } = useParams()

const mymeeting = async (element) => {
    const appID = 1560856976;
    const serverSecret = "bea5da10c781aa5f2a3504c743b6f0f3";

    const kittoken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID ,
         serverSecret, 
         roomid ,
         Date.now().toString(), "ajay")
const zp = ZegoUIKitPrebuilt.create(kittoken)
zp.joinRoom({
    container:element,
    scenario : {
        mode : ZegoUIKitPrebuilt.VideoConference
    }
})
}
  return (
    <div className='roompage'>
     <div ref={mymeeting}/>
    </div>
  )
}

export default Roompage
