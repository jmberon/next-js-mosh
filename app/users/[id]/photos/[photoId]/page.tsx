import React from 'react'

interface Props {
    params: { id: number, photoId: number }
}

const UserFotosDetailPage = ({params: { id, photoId }}: Props) => {

  return (
    <div>
      User Id {id} Photo # {photoId}
    </div>
  )
}

export default UserFotosDetailPage
