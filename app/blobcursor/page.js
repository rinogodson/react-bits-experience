"use client"
import React from 'react'
import BlobCursor from '@/src/blocks/Animations/BlobCursor/BlobCursor'
import ColorPicker from '../components/colorPicker/colorpicker'
function Page() {
  const [showBlob, setShowBlob] = React.useState(true)
  const [blobProps, setBlobProps] = React.useState({
    bgColor: "#292929",
    blobColor: "#663399",
    blobType: "circle"
  })
  return (
    <div className="w-screen h-screen flex justify-between items-center">
      <div className={`w-[100vh] aspect-square`} style={{backgroundColor: blobProps.bgColor}}>
        {showBlob && (
          <BlobCursor
            blobType={blobProps.blobType}
            fillColor={blobProps.blobColor}
          />
        )}
      </div>
      <div className="settingsCont" style={{ position: "relative" }}>
        <p className="settingsTitle">{`-> Settings <-`}</p>
        <div className='grid grid-cols-2 gap-[10px]'>
          <ColorPicker
            label="Blob Color"
            value={blobProps.blobColor}
            onChangeFn={(e) => {
              setBlobProps((prev) => {
                return { ...prev, blobColor: e.target.value };
              });
            }}
          />
          <ColorPicker
            label="BG Color"
            value={blobProps.bgColor}
            onChangeFn={(e) => {
              setBlobProps((prev) => {
                return { ...prev, bgColor: e.target.value };
              });
            }}
          />
        </div>
        <div className="division"></div>
        <p>Reload if FPS issues.</p>
      </div>
    </div>
  );
}

export default Page
