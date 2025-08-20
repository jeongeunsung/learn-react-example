import { useState } from 'react'
import emotions from '@/data/emotions.json'
import { getRandomIndex } from '@/utils'
import LearnSection from '../learn-section'
import ChangeButton from './change-button'
import { EmotionFigure } from './emotions'

const calcRandomIndex = () => getRandomIndex(emotions.length)

export default function SharingState() {
  const [randomIndex, setRandomIndex] = useState(calcRandomIndex)
  const emotionInfo = emotions[randomIndex]
  const handleChangeRandomIndex = () => setRandomIndex(calcRandomIndex())

  return (
    <LearnSection title="다른 컴포넌트와 상태 공유하기">
      <EmotionFigure />
      <ChangeButton
        message={emotionInfo.message}
        onUpdate={handleChangeRandomIndex}
      />
    </LearnSection>
  )
}
