"use client";

import React from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary';

const UploadPage = () => {
    const [publicId, setPublicId] = React.useState('');

    interface CloudinaryResult {
        public_id: string;
    }

  return (
    <>
        {publicId && <CldImage src={publicId} width={270} height={180} alt="Some Image" />}
        <CldUploadWidget 
            onUpload={(response, widget) => {
                if(response.event !== 'success') return;

                const info = response.info as CloudinaryResult;
                setPublicId(info.public_id);
            }}
            options={{
                sources: ['local'],
                multiple: false,
                maxFiles: 5,
            }}
            uploadPreset="suiesjqy">
        {({ open }) => {
            return (
            <button onClick={() => open()}>
                Upload an Image
            </button>
            );
        }}
        </CldUploadWidget>
    </>
  )
}

export default UploadPage
