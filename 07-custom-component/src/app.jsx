import users from './data/users.json'
import { UserCard } from './components/user-card'

export default function App() {
  const userListElement = users.map((user) => (
    <UserCard
      key={user.id}
      id={user.id}
      name={user.name}
      phoneNumber={user.phoneNumber}
      address={user.address}
      age={user.age}
    />
  ))

  return (
    <section className="app demo">
      <h1>UserCard 커스텀 컴포넌트</h1>
      {userListElement}
    </section>
  )
}
