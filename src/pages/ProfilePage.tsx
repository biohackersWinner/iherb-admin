import { useHistory } from 'react-router-dom'
import { Button } from 'antd'

export default function ProfilePage() {
  const history = useHistory()

  async function logOut() {
    history.push('/login')
  }

  return (
    <>
      <span>
        <Button onClick={logOut} onKeyDown={logOut}>
          Выйти
        </Button>
      </span>
    </>
  )
}
