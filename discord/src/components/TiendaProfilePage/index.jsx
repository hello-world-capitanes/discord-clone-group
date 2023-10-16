import Call from '../Call/Call'

export const Tienda = () => {
  return (
    <>
      <Call
        friends={[
          {
            id: 1,
            avatar: 'https://picsum.photos/200',
            username: 'david',
          },
          {
            id: 2,
            avatar: 'https://picsum.photos/200',
            username: 'davidX',
          },
        ]}
      ></Call>
    </>
  )
}
