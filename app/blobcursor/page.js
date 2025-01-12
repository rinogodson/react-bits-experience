"use client"
import React from 'react'
import BlobCursor from '@/src/blocks/Animations/BlobCursor/BlobCursor'
import ColorPicker from '../components/colorPicker/colorpicker'
import Select from '../components/uiverse/select'
function Page() {
  const [showBlob, setShowBlob] = React.useState(true)
  const [template, setTemplate] = React.useState("Custom")

  const [blobProps, setBlobProps] = React.useState({
    bgColor: "#0b0b0b",
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
        <p>Templates</p>
        <Select templates={templates} template={template} setTemplate={setTemplate} setProps={setBlobProps} />
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

const templates = [
  {
    name: "Custom",
    set: {
      bgColor: "#0b0b0b",
      blobColor: "#663399",
      blobType: "circle",
    },
  },
  {
    name: "Gum",
    set: {
      bgColor: "#0057a8",
      blobColor: "#e30fff",
      blobType: "circle",
    },
  },
  {
    name: "Blobby",
    set: {
      bgColor: "#002e14",
      blobColor: "#1eff00",
      blobType: "circle",
    },
  },
];