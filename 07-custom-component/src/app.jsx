import userData from './data/user.json'
import UserCard from './components/user-card/user-card'

export default function App() {
  return (
    <section className="app demo">
      <h1>UserCard 커스텀 컴포넌트</h1>
      <UserCard
        id={userData.id}
        name={userData.name}
        phoneNumber={userData.phoneNumber}
        address={userData.address}
        age={46}
      />
    </section>
  )
}
