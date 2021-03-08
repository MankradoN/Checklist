import styles from '../styles/Home.module.css'
import Task from './src/task'

export default function Home() {
  return (
    <div>
      <Task title="Book Club " duration={10} priority="high" description="Read Where The Cradwdads Sings" image="/book.jpeg"/>
      <Task title="Go for a bike ride " duration={6} priority="medium" description="travel to Richmond park to have a picnic and cycle by the deers " image="/biking.jpeg"/>
    </div>
  )
}


